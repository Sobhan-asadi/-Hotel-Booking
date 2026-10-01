const BOOKINGS_STORAGE_KEY = "ogo-bookings";

export function getBookings() {
  try {
    const storedBookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);

    if (!storedBookings) {
      return [];
    }

    const bookings = JSON.parse(storedBookings);

    return Array.isArray(bookings) ? bookings : [];
  } catch {
    return [];
  }
}

export function createBooking({
  room,
  checkIn,
  checkOut,
  guests,
  nights,
  totalPrice,
}) {
  const booking = {
    id: crypto.randomUUID(),
    roomId: room.id,
    roomName: room.name,
    location: room.location,
    image: room.image,
    checkIn,
    checkOut,
    guests,
    nights,
    pricePerNight: room.pricePerNight,
    totalPrice,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };

  const currentBookings = getBookings();

  localStorage.setItem(
    BOOKINGS_STORAGE_KEY,
    JSON.stringify([booking, ...currentBookings]),
  );

  return booking;
}
