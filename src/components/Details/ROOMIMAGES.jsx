export default function ROOMIMAGES({ room }) {
  return (
    <div className="mt-6 flex flex-col gap-6 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <img
          src={room?.image}
          alt={room?.name}
          className="w-full rounded-xl object-cover shadow-lg"
        />
      </div>

      <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
        <img
          src={room?.image}
          alt={room?.name}
          className={`w-full cursor-pointer rounded-xl object-cover shadow-md`}
        />
        <img
          src={room?.image}
          alt={room?.name}
          className={`w-full cursor-pointer rounded-xl object-cover shadow-md`}
        />
      </div>
    </div>
  );
}
