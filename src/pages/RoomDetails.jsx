import { useParams } from "react-router-dom";

export default function RoomDetails() {
  let params = useParams();
  console.log(params.name);

  return <div className="">RoomDetails</div>;
}
