import { IoLocationOutline } from "react-icons/io5";

export default function ROOMADDRESS({ room }) {
  return (
    <div className="mt-2 flex items-center gap-1 text-gray-500">
      <IoLocationOutline />
      <p>{room?.location}</p>
    </div>
  );
}
