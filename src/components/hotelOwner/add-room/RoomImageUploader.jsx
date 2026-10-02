import { HiOutlinePhotograph, HiOutlineTrash } from "react-icons/hi";

const imageSlots = ["1", "2", "3", "4"];

function EmptyImageSlot({ isPrimary }) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
      <span
        className={`bg-primary-50 text-primary-700 flex items-center justify-center rounded-full ${
          isPrimary ? "h-12 w-12" : "h-10 w-10"
        }`}
      >
        <HiOutlinePhotograph
          aria-hidden="true"
          className={isPrimary ? "text-xl" : "text-lg"}
        />
      </span>

      <p className="text-primary-950 mt-3 text-xs font-semibold">
        {isPrimary ? "Upload main image" : "Add image"}
      </p>

      <p className="mt-1 text-[10px] text-zinc-400">JPG, PNG or WEBP</p>
    </div>
  );
}

function ImageSlot({
  slotKey,
  preview,
  isPrimary,
  index,
  onImageChange,
  onImageRemove,
  className = "",
}) {
  return (
    <div
      className={`relative min-h-0 overflow-hidden rounded-[18px] border ${
        preview
          ? "border-primary-900/[0.08] bg-primary-50"
          : "border-primary-900/[0.14] bg-primary-50/30 hover:border-primary-700/30 hover:bg-primary-50/60 border-dashed transition-colors"
      } ${className}`}
    >
      {preview ? (
        <>
          <img
            src={preview}
            alt={isPrimary ? "Main room preview" : `Room preview ${index + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"
          />

          {isPrimary && (
            <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[9px] font-semibold tracking-[0.08em] text-white uppercase backdrop-blur-md">
              Main image
            </span>
          )}

          <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-2">
            <label
              htmlFor={`room-image-${slotKey}`}
              className="text-primary-950 cursor-pointer rounded-full border border-white/20 bg-white/90 px-3 py-2 text-[10px] font-semibold backdrop-blur-md transition hover:bg-white"
            >
              Replace
            </label>

            <button
              type="button"
              onClick={() => onImageRemove(slotKey)}
              aria-label={`Remove image ${index + 1}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
            >
              <HiOutlineTrash aria-hidden="true" className="text-sm" />
            </button>
          </div>
        </>
      ) : (
        <label
          htmlFor={`room-image-${slotKey}`}
          className="absolute inset-0 cursor-pointer"
        >
          <EmptyImageSlot isPrimary={isPrimary} />
        </label>
      )}

      <input
        id={`room-image-${slotKey}`}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="sr-only"
        onChange={(event) => {
          const file = event.target.files?.[0];

          if (file) {
            onImageChange(slotKey, file);
          }

          event.target.value = "";
        }}
      />
    </div>
  );
}

export default function RoomImageUploader({
  images,
  previews,
  onImageChange,
  onImageRemove,
}) {
  const selectedImagesCount = Object.values(images).filter(Boolean).length;

  return (
    <section className="border-primary-900/[0.07] rounded-[24px] border bg-white p-5 shadow-[0_8px_30px_rgba(20,40,32,0.035)] sm:p-6">
      <div>
        <p className="text-accent-700 text-[10px] font-bold tracking-[0.14em] uppercase">
          Room gallery
        </p>

        <h2 className="text-primary-950 mt-1.5 text-lg font-semibold tracking-[-0.02em]">
          Room images
        </h2>

        <p className="mt-1 max-w-xl text-xs leading-5 text-zinc-400">
          Add up to four images. The first image will be used as the primary
          room image.
        </p>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(220px,0.8fr)]">
        <ImageSlot
          slotKey={imageSlots[0]}
          preview={previews[imageSlots[0]]}
          isPrimary
          index={0}
          onImageChange={onImageChange}
          onImageRemove={onImageRemove}
          className="aspect-[16/10] lg:aspect-auto lg:h-[360px]"
        />

        <div className="grid grid-cols-2 gap-3 lg:h-[360px] lg:grid-cols-1 lg:grid-rows-3">
          {imageSlots.slice(1).map((key, index) => (
            <ImageSlot
              key={key}
              slotKey={key}
              preview={previews[key]}
              isPrimary={false}
              index={index + 1}
              onImageChange={onImageChange}
              onImageRemove={onImageRemove}
              className={`aspect-[16/10] lg:aspect-auto lg:h-full ${
                index === 2 ? "col-span-2 lg:col-span-1" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <div className="border-primary-900/[0.06] mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-4">
        <p className="text-[10px] text-zinc-400">
          <span className="text-primary-800 font-semibold">
            {selectedImagesCount}
          </span>{" "}
          of 4 images selected
        </p>

        <p className="text-[10px] font-medium text-zinc-400">
          Recommended: landscape images
        </p>
      </div>
    </section>
  );
}
