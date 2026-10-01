import { HiOutlinePhotograph } from "react-icons/hi";

export default function RoomImages({ room }) {
  const images =
    room.images?.length > 0 ? room.images.slice(0, 4) : [room.image];

  const mainImage = images[0];
  const thumbnails = images.slice(1);

  return (
    <section aria-label={`${room.name} gallery`} className="min-w-0">
      <div className="bg-primary-100 relative overflow-hidden rounded-[28px]">
        <div className="relative h-[360px] sm:h-[440px] lg:h-[430px] xl:h-[460px]">
          <img
            src={mainImage}
            alt={`${room.name} featured view`}
            className="h-full w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
          />

          <div className="absolute right-4 bottom-4">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-2 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md">
              <HiOutlinePhotograph aria-hidden="true" className="text-base" />
              {images.length} photos
            </div>
          </div>
        </div>
      </div>

      {thumbnails.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {thumbnails.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group bg-primary-100 relative aspect-[16/10] overflow-hidden rounded-[18px]"
            >
              <img
                src={image}
                alt={`${room.name} view ${index + 2}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
