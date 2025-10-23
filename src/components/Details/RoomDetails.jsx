export default function RoomDetails({ room }) {
  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
      <h1 className="font-playfair text-3xl md:text-4xl">{room?.name}</h1>
      <p className="font-inter rounded-full bg-orange-500 px-3 py-1.5 text-xs text-white">
        20% OFF
      </p>
    </div>
  );
}
