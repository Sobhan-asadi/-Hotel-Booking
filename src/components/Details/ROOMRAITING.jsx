import { IoMdStar } from "react-icons/io";

export default function ROOMRAITING({ room }) {
  return (
    <div className="mt-2 flex items-center gap-1">
      <IoMdStar className="text-yellow-300" />
      <p>{room?.rating}</p>
    </div>
  );
}
