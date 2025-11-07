export default function Title({ align, title, subTitle, font }) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${align === "left" && "md:items-start md:text-left"}`}
    >
      <h1 className={`text-2xl md:text-[40px] ${font || "font-playfair"}`}>
        {title}
      </h1>
      <p className="mt-2 max-w-[350px] text-sm text-gray-500/90 md:max-w-174 md:text-base">
        {subTitle}
      </p>
    </div>
  );
}
