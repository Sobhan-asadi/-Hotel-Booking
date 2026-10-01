import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import hotels from "../../api/data";
import EmptyRoomsState from "./rooms/EmptyRoomsState";
import RoomCard from "./rooms/RoomCard";
import RoomFilters from "./rooms/RoomFilters";
import RoomsHeader from "./rooms/RoomsHeader";
import RoomsPagination from "./rooms/RoomsPagination";

const DEFAULT_SORT = "recommended";
const ROOMS_PER_PAGE = 6;

function parseTypes(searchParams) {
  return searchParams
    .getAll("type")
    .map((type) => type.trim())
    .filter(Boolean);
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

  const destination = searchParams.get("destination") ?? "";

  const selectedTypes = parseTypes(searchParams);

  const selectedPrice = searchParams.get("price") ?? "all";

  const sortBy = searchParams.get("sort") ?? DEFAULT_SORT;

  const requestedPage = Number(searchParams.get("page"));

  const filteredRooms = useMemo(() => {
    const normalizedDestination = destination.trim().toLowerCase();

    const rooms = hotels.filter((room) => {
      const matchesDestination =
        !normalizedDestination ||
        room.location.toLowerCase().includes(normalizedDestination) ||
        room.name.toLowerCase().includes(normalizedDestination);

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(room.type);

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

  const totalPages = Math.ceil(filteredRooms.length / ROOMS_PER_PAGE);

  const currentPage =
    totalPages === 0
      ? 1
      : Math.min(
          Math.max(Number.isInteger(requestedPage) ? requestedPage : 1, 1),
          totalPages,
        );

  const currentRooms = useMemo(() => {
    const startIndex = (currentPage - 1) * ROOMS_PER_PAGE;

    return filteredRooms.slice(startIndex, startIndex + ROOMS_PER_PAGE);
  }, [filteredRooms, currentPage]);

  function updateParam(key, value) {
    const nextParams = new URLSearchParams(searchParams);

    if (!value || value === "all") {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }

    nextParams.delete("page");

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  function handleDestinationChange(value) {
    updateParam("destination", value.trim());
  }

  function handleTypeChange(type) {
    const nextParams = new URLSearchParams(searchParams);

    const currentTypes = parseTypes(searchParams);

    const nextTypes = currentTypes.includes(type)
      ? currentTypes.filter((currentType) => currentType !== type)
      : [...currentTypes, type];

    nextParams.delete("type");

    nextTypes.forEach((roomType) => {
      nextParams.append("type", roomType);
    });

    nextParams.delete("page");

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  function handlePageChange(page) {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    const nextParams = new URLSearchParams(searchParams);

    if (page === 1) {
      nextParams.delete("page");
    } else {
      nextParams.set("page", String(page));
    }

    setSearchParams(nextParams);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleClearFilters() {
    setSearchParams({}, { replace: true });
  }

  return (
    <main className="pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
      <div className="page-container">
        <RoomsHeader
          destination={destination}
          resultCount={filteredRooms.length}
          onDestinationChange={handleDestinationChange}
        />

        <div className="border-primary-900/[0.08] mt-8 border-t pt-6">
          <RoomFilters
            selectedTypes={selectedTypes}
            selectedPrice={selectedPrice}
            sortBy={sortBy}
            onTypeChange={handleTypeChange}
            onPriceChange={(value) => updateParam("price", value)}
            onSortChange={(value) => updateParam("sort", value)}
            onClear={handleClearFilters}
          />
        </div>

        <section className="mt-8">
          {filteredRooms.length > 0 ? (
            <>
              <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
                {currentRooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>

              <RoomsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <EmptyRoomsState onClear={handleClearFilters} />
          )}
        </section>
      </div>
    </main>
  );
}
