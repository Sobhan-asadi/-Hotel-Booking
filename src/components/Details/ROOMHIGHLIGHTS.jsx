export default function ROOMHIGHLIGHTS({ room }) {
  return (
    <div className="mt-10 flex flex-col md:flex-row md:justify-between">
      <div className="">
        <h2 className="font-playfair text-3xl md:text-4xl">
          Experience Luxury Like Never Before
        </h2>
        <div className="mt-2.5 mb-6 flex items-center gap-4">
          {room?.features.map((feature) => (
            <div
              className="rounded-lg bg-gray-100 px-3 py-2 shadow-md"
              key={feature}
            >
              <p className="text-xs">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ROOM Price */}
      <p className="text-2xl font-medium">${room?.pricePerNight}/night</p>
    </div>
  );
}
