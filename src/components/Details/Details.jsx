import { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

import hotels from "../../../api/data";
import BookingPanel from "./BookingPanel";
import RoomDetails from "./RoomDetails";
import RoomHighlights from "./RoomHighlights";
import RoomImages from "./RoomImages";

export default function Details() {
  const { roomId } = useParams();
  const { pathname } = useLocation();

  const room = hotels.find((hotel) => String(hotel.id) === roomId);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  return (
    <main className="page-container pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <RoomDetails room={room} />
      <div className="mt-8 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_390px] xl:gap-6">
        <div className="min-w-0">
          <RoomImages room={room} />
        </div>

        <div className="min-w-0 lg:sticky lg:top-28">
          <BookingPanel room={room} />
        </div>
      </div>
      <RoomHighlights room={room} />
    </main>
  );
}
