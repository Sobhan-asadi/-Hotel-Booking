import { useRef } from "react";
import Hero from "../components/Hero";

export default function HomePage() {
  const ref = useRef(null);

  return (
    <div className="mx-auto" ref={ref}>
      {/* <div className="h-svh bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat"> </div> */}
      <Hero />
    </div>
  );
}
