import { useMemo, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";

import hotelsData from "../../../api/data";
import RoomManagementCard from "../../components/hotelOwner/rooms/RoomManagementCard";
import RoomsPagination from "../../components/hotelOwner/rooms/RoomsPagination";
import RoomsTable from "../../components/hotelOwner/rooms/RoomsTable";
import RoomsToolbar from "../../components/hotelOwner/rooms/RoomsToolbar";

const ROOMS_PER_PAGE = 5;

export default function ListRoomPage() {
  const [rooms, setRooms] = useState(hotelsData);
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRooms = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = rooms.filter((room) => {
      const roomName = room.name?.toLowerCase() ?? "";
      const roomLocation = room.location?.toLowerCase() ?? "";

      const matchesSearch =
        !normalizedSearch ||
        roomName.includes(normalizedSearch) ||
        roomLocation.includes(normalizedSearch);

      const matchesAvailability =
        availability === "all" ||
        (availability === "available" && room.isAvailable) ||
        (availability === "unavailable" && !room.isAvailable);

      return matchesSearch && matchesAvailability;
    });

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.pricePerNight - b.pricePerNight;

        case "price-desc":
          return b.pricePerNight - a.pricePerNight;

        case "name-asc":
          return a.name.localeCompare(b.name);

        default:
          return 0;
      }
    });
  }, [rooms, search, availability, sortBy]);

  const totalPages = Math.ceil(filteredRooms.length / ROOMS_PER_PAGE);

  const paginatedRooms = useMemo(() => {
    const startIndex = (currentPage - 1) * ROOMS_PER_PAGE;

    return filteredRooms.slice(startIndex, startIndex + ROOMS_PER_PAGE);
  }, [filteredRooms, currentPage]);

  function handleToggleAvailability(id) {
    setRooms((currentRooms) =>
      currentRooms.map((room) =>
        room.id === id
          ? {
              ...room,
              isAvailable: !room.isAvailable,
            }
          : room,
      ),
    );
  }

  function handleSearchChange(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleAvailabilityChange(value) {
    setAvailability(value);
    setCurrentPage(1);
  }

  function handleSortChange(value) {
    setSortBy(value);
    setCurrentPage(1);
  }

  function handlePageChange(page) {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleResetFilters() {
    setSearch("");
    setAvailability("all");
    setSortBy("default");
    setCurrentPage(1);
  }

  return (
    <div className="space-y-7">
      <header className="border-primary-900/[0.07] flex flex-col gap-5 border-b pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-accent-700 text-[10px] font-bold tracking-[0.16em] uppercase">
            Inventory
          </p>

          <h1 className="font-display text-primary-950 mt-2 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Manage rooms
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Manage room availability, pricing, and property inventory from one
            place.
          </p>
        </div>

        <Link
          to="/owner/add-room"
          className="bg-primary-950 hover:bg-primary-700 flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-xs font-semibold text-white transition-colors"
        >
          <HiOutlinePlus aria-hidden="true" className="text-base" />
          Add room
        </Link>
      </header>

      <RoomsToolbar
        search={search}
        availability={availability}
        sortBy={sortBy}
        resultCount={filteredRooms.length}
        onSearchChange={handleSearchChange}
        onAvailabilityChange={handleAvailabilityChange}
        onSortChange={handleSortChange}
      />

      {filteredRooms.length > 0 ? (
        <>
          <RoomsTable
            rooms={paginatedRooms}
            onToggleAvailability={handleToggleAvailability}
          />

          <div className="grid gap-4 md:hidden">
            {paginatedRooms.map((room) => (
              <RoomManagementCard
                key={room.id}
                room={room}
                onToggleAvailability={handleToggleAvailability}
              />
            ))}
          </div>

          <RoomsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredRooms.length}
            itemsPerPage={ROOMS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <section className="border-primary-900/15 flex min-h-[320px] flex-col items-center justify-center rounded-[24px] border border-dashed bg-white/60 px-6 text-center">
          <div className="bg-primary-100 text-primary-700 flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold">
            0
          </div>

          <h2 className="font-display text-primary-950 mt-5 text-2xl font-semibold tracking-[-0.025em]">
            No rooms found
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
            No rooms match your current search and availability filters.
          </p>

          <button
            type="button"
            onClick={handleResetFilters}
            className="secondary-button mt-6"
          >
            Reset filters
          </button>
        </section>
      )}
    </div>
  );
}
