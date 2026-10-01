import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import hotels from "../../api/data";
import EmptyRoomsState from "./rooms/EmptyRoomsState";
import RoomCard from "./rooms/RoomCard";
import RoomFilters from "./rooms/RoomFilters";
import RoomsHeader from "./rooms/RoomsHeader";

function getRoomType(room) {
  if (room.type) {
    return room.type;
  }

  if (room.pricePerNight >= 500) {
    return "Luxury Room";
  }

  if (room.features?.includes("Pet friendly")) {
    return "Family Suite";
  }

  if (room.pricePerNight >= 350) {
    return "Double Bed";
  }

  return "Single bed";
}

function matchesPriceRange(price, range) {
  switch (range) {
    case "under-300":
      return price < 300;

    case "300-400":
      return price >= 300 && price < 400;

    case "400-500":
      return price >= 400 && price < 500;

    case "500-plus":
      return price >= 500;

    default:
      return true;
  }
}

export default function AllRooms() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [openFilters, setOpenFilters] = useState(false);

  const [selectedTypes, setSelectedTypes] = useState([]);

  const [selectedPrice, setSelectedPrice] = useState("all");

  const [sortBy, setSortBy] = useState("recommended");

  const destination = searchParams.get("destination") ?? "";

  const filteredRooms = useMemo(() => {
    const normalizedDestination = destination.trim().toLowerCase();

    const rooms = hotels.filter((room) => {
      const matchesDestination =
        !normalizedDestination ||
        room.location.toLowerCase().includes(normalizedDestination) ||
        room.name.toLowerCase().includes(normalizedDestination);

      const roomType = getRoomType(room);

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(roomType);

      const matchesPrice = matchesPriceRange(room.pricePerNight, selectedPrice);

      return matchesDestination && matchesType && matchesPrice;
    });

    return [...rooms].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.pricePerNight - b.pricePerNight;

        case "price-desc":
          return b.pricePerNight - a.pricePerNight;

        case "rating-desc":
          return b.rating - a.rating;

        default:
          return 0;
      }
    });
  }, [destination, selectedTypes, selectedPrice, sortBy]);

  function handleDestinationChange(value) {
    const nextParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      nextParams.set("destination", value);
    } else {
      nextParams.delete("destination");
    }

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  function handleTypeChange(type) {
    setSelectedTypes((currentTypes) =>
      currentTypes.includes(type)
        ? currentTypes.filter((currentType) => currentType !== type)
        : [...currentTypes, type],
    );
  }

  function handleClearFilters() {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.delete("destination");

    setSearchParams(nextParams, {
      replace: true,
    });

    setSelectedTypes([]);
    setSelectedPrice("all");
    setSortBy("recommended");
  }

  return (
    <main className="page-container pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <RoomsHeader
        destination={destination}
        resultCount={filteredRooms.length}
        onDestinationChange={handleDestinationChange}
      />

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
        <RoomFilters
          selectedTypes={selectedTypes}
          selectedPrice={selectedPrice}
          sortBy={sortBy}
          openFilters={openFilters}
          onToggleFilters={() => setOpenFilters((current) => !current)}
          onTypeChange={handleTypeChange}
          onPriceChange={setSelectedPrice}
          onSortChange={setSortBy}
          onClear={handleClearFilters}
        />

        <div className="min-w-0 flex-1">
          {filteredRooms.length > 0 ? (
            <div className="space-y-6">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <EmptyRoomsState onClear={handleClearFilters} />
          )}
        </div>
      </div>
    </main>
  );
}
