import { useEffect, useMemo, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

import AmenitiesSelector from "../../components/hotelOwner/add-room/AmenitiesSelector";
import RoomDetailsForm from "../../components/hotelOwner/add-room/RoomDetailsForm";
import RoomImageUploader from "../../components/hotelOwner/add-room/RoomImageUploader";

const initialImages = {
  1: null,
  2: null,
  3: null,
  4: null,
};

const initialForm = {
  roomType: "",
  pricePerNight: "",
  amenities: {
    freeWifi: false,
    freeBreakfast: false,
    roomService: false,
    mountainView: false,
    poolAccess: false,
  },
};

export default function AddRoomPage() {
  const [images, setImages] = useState(initialImages);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const previews = useMemo(() => {
    return Object.fromEntries(
      Object.entries(images).map(([key, file]) => [
        key,
        file ? URL.createObjectURL(file) : null,
      ]),
    );
  }, [images]);

  useEffect(() => {
    return () => {
      Object.values(previews).forEach((preview) => {
        if (preview) {
          URL.revokeObjectURL(preview);
        }
      });
    };
  }, [previews]);

  const selectedImagesCount = Object.values(images).filter(Boolean).length;

  const selectedAmenitiesCount = Object.values(form.amenities).filter(
    Boolean,
  ).length;

  const isFormReady =
    Boolean(form.roomType) &&
    Number(form.pricePerNight) > 0 &&
    selectedImagesCount > 0;

  function handleImageChange(key, file) {
    setImages((currentImages) => ({
      ...currentImages,
      [key]: file,
    }));

    setSubmitted(false);
  }

  function handleImageRemove(key) {
    setImages((currentImages) => ({
      ...currentImages,
      [key]: null,
    }));

    setSubmitted(false);
  }

  function handleRoomTypeChange(value) {
    setForm((currentForm) => ({
      ...currentForm,
      roomType: value,
    }));

    setSubmitted(false);
  }

  function handlePriceChange(value) {
    setForm((currentForm) => ({
      ...currentForm,
      pricePerNight: value,
    }));

    setSubmitted(false);
  }

  function handleAmenityChange(key) {
    setForm((currentForm) => ({
      ...currentForm,
      amenities: {
        ...currentForm.amenities,
        [key]: !currentForm.amenities[key],
      },
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormReady) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="space-y-7">
      <header className="border-primary-900/[0.07] flex flex-col gap-5 border-b pb-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-accent-700 text-[10px] font-bold tracking-[0.16em] uppercase">
            Inventory
          </p>

          <h1 className="font-display text-primary-950 mt-2 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Add a new room
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Add room images, choose its category, set the nightly rate, and
            select the amenities available to guests.
          </p>
        </div>

        <Link
          to="/owner/list-room"
          className="border-primary-900/[0.09] text-primary-800 hover:bg-primary-50 flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full border bg-white px-5 text-xs font-semibold transition-colors"
        >
          <HiOutlineArrowLeft aria-hidden="true" className="text-base" />
          Back to rooms
        </Link>
      </header>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.65fr)] xl:items-start"
      >
        <div className="space-y-6">
          <RoomImageUploader
            images={images}
            previews={previews}
            onImageChange={handleImageChange}
            onImageRemove={handleImageRemove}
          />

          <RoomDetailsForm
            roomType={form.roomType}
            pricePerNight={form.pricePerNight}
            onRoomTypeChange={handleRoomTypeChange}
            onPriceChange={handlePriceChange}
          />

          <AmenitiesSelector
            amenities={form.amenities}
            onAmenityChange={handleAmenityChange}
          />
        </div>

        <aside className="xl:sticky xl:top-6">
          <div className="border-primary-900/[0.07] rounded-[24px] border bg-white p-5 shadow-[0_8px_30px_rgba(20,40,32,0.035)] sm:p-6">
            <p className="text-accent-700 text-[10px] font-bold tracking-[0.14em] uppercase">
              Summary
            </p>

            <h2 className="text-primary-950 mt-1.5 text-lg font-semibold tracking-[-0.02em]">
              Room setup
            </h2>

            <p className="mt-1 text-xs leading-5 text-zinc-400">
              Review the room information before adding it to the demo
              inventory.
            </p>

            <div className="divide-primary-900/[0.06] border-primary-900/[0.06] mt-6 divide-y border-y">
              <div className="flex items-center justify-between gap-4 py-4">
                <span className="text-xs text-zinc-500">Images</span>

                <span className="text-primary-950 text-xs font-semibold">
                  {selectedImagesCount}/4
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <span className="text-xs text-zinc-500">Room type</span>

                <span className="text-primary-950 max-w-[150px] truncate text-right text-xs font-semibold">
                  {form.roomType || "Not selected"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <span className="text-xs text-zinc-500">Nightly rate</span>

                <span className="text-primary-950 text-xs font-semibold">
                  {Number(form.pricePerNight) > 0
                    ? `$${Number(form.pricePerNight).toLocaleString()}`
                    : "Not set"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <span className="text-xs text-zinc-500">Amenities</span>

                <span className="text-primary-950 text-xs font-semibold">
                  {selectedAmenitiesCount} selected
                </span>
              </div>
            </div>

            <div className="bg-primary-50/70 mt-5 rounded-[16px] p-4">
              <div className="flex items-start gap-3">
                <span className="text-primary-700 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                  <HiOutlineCheckCircle
                    aria-hidden="true"
                    className="text-lg"
                  />
                </span>

                <div>
                  <p className="text-primary-950 text-xs font-semibold">
                    Required information
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-zinc-500">
                    Add at least one image, select a room type, and enter a
                    valid nightly rate.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormReady}
              className="bg-primary-950 hover:bg-primary-700 mt-5 flex min-h-12 w-full items-center justify-center rounded-full px-5 text-xs font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-400"
            >
              Add room
            </button>

            <p className="mt-3 text-center text-[10px] leading-4 text-zinc-400">
              Demo only — no server data will be created.
            </p>

            {submitted && (
              <div
                role="status"
                className="border-primary-700/10 bg-primary-50 mt-4 rounded-[15px] border px-4 py-3"
              >
                <div className="flex items-start gap-2.5">
                  <HiOutlineCheckCircle
                    aria-hidden="true"
                    className="text-primary-700 mt-0.5 shrink-0 text-lg"
                  />

                  <p className="text-primary-800 text-[11px] leading-5">
                    Room information is valid. This demo does not persist new
                    rooms yet.
                  </p>
                </div>
              </div>
            )}
          </div>
        </aside>
      </form>
    </div>
  );
}
