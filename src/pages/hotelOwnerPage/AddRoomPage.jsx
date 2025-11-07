import { useState } from "react";
import { FcAddImage } from "react-icons/fc";
import Title from "../../components/Title";

const initialImages = { 1: null, 2: null, 3: null, 4: null };

const input = {
  roomtype: "",
  pricePerNight: 0,
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
  const [inputs, setInputs] = useState(input);
  console.log(images);

  return (
    <form>
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience."
      />
      {/* upload Area for images */}
      <p>Images</p>
      <div className="my-2 grid grid-cols-2 flex-wrap gap-4 sm:flex">
        {Object.keys(images).map((key) => (
          <label
            className="cursor-pointer"
            htmlFor={`roomImage${key}`}
            key={key}
          >
            {images[key] ? (
              <img
                className="max-h-14 cursor-pointer opacity-80"
                src={URL.createObjectURL(images[key])}
                alt="add-room-image"
              />
            ) : (
              <FcAddImage size={50} />
            )}
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      <div className="mt-4 flex w-full max-sm:flex-col sm:gap-4">
        <div className="max-w-48 flex-1">
          <p className="mt-4 text-gray-800">Room Type</p>
          <select
            value={inputs.roomtype}
            onChange={(e) => setInputs({ ...inputs, roomtype: e.target.value })}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 opacity-70 outline-none"
          >
            <option className="" value="">
              Slect Room Type
            </option>
            <option className="" value="Single Bed">
              Single Bed
            </option>
            <option className="" value="Double Bed">
              Double Bed
            </option>
            <option className="" value="Luxury Room">
              Luxury Room
            </option>
            <option className="" value="Family Suite">
              Family Suite
            </option>
          </select>
        </div>

        <div className="">
          <p className="mt-4 text-gray-800">
            Price <span className="text-sm">/Night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="mt-1 w-24 rounded-md border border-gray-300 p-2 outline-none"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      <p className="mt-4 text-gray-800">Amenities</p>
      <div className="mt-1 flex max-w-sm flex-col flex-wrap text-gray-400">
        {Object.keys(inputs.amenities).map((amenity, i) => (
          <div className="" key={i}>
            <input
              className="m-1"
              type="checkbox"
              id={`amenities${i + 1}`}
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            <label htmlFor={`amenities${i + 1}`}>{amenity}</label>
          </div>
        ))}
      </div>
      <button className="bg-primary hover:bg-primary/90 mt-8 cursor-pointer rounded-md px-8 py-2 text-white transition-all">
        Add Room
      </button>
    </form>
  );
}
