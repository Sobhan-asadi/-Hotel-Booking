export function getToday() {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60_000;

  return new Date(today.getTime() - timezoneOffset).toISOString().split("T")[0];
}

export function getNumberOfNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) {
    return 0;
  }

  const start = new Date(`${checkIn}T00:00:00`);

  const end = new Date(`${checkOut}T00:00:00`);

  const difference = end.getTime() - start.getTime();

  return Math.max(0, Math.round(difference / 86_400_000));
}
