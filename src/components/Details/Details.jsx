import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import hotels from "../../../api/data";
import DetailsFoorm from "./DetailsFoorm";
import ROOMADDRESS from "./ROOMADDRESS";
import RoomDetails from "./RoomDetails";
import ROOMHIGHLIGHTS from "./ROOMHIGHLIGHTS";
import ROOMIMAGES from "./ROOMIMAGES";
import ROOMRAITING from "./ROOMRAITING";

export default function Details() {
  let { name } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const room = hotels.filter((room) => room.name === name);
    setRoom(room[0]);
  }, [name]);
  console.log(room);

  return (
    <div className="px-4 py-28 md:px-16 md:py-35 lg:px-24 xl:px-32">
      {/* Room Details */}
      <RoomDetails room={room} />
      {/* ROOM RAITING */}
      <ROOMRAITING room={room} />
      {/* ROOM ADDRESS */}
      <ROOMADDRESS room={room} />
      {/* ROOM IMAGES */}
      <ROOMIMAGES room={room} />
      {/* ROOM HIGHLIGHTS */}
      <ROOMHIGHLIGHTS room={room} />
      {/* check in  */}
      <DetailsFoorm />
    </div>
  );
}
