import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 py-20 text-sm max-md:px-4">
      <div className="mb-6 rounded-full bg-red-600 px-4 py-2 font-semibold tracking-wider text-white uppercase shadow-lg">
        ERROR
      </div>

      <h1 className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow md:text-5xl">
        Something Went Wrong
      </h1>

      <div className="my-5 h-px w-80 rounded bg-gradient-to-r from-red-400 to-gray-500 md:my-7"></div>
      <p className="max-w-lg text-center text-gray-300 md:text-xl">
        We&apos;re sorry, an unexpected error has occurred.
        <br />
        Please try refreshing the page, or return to the homepage.
      </p>

      <Link
        to="/"
        className="group mt-10 flex items-center gap-1 rounded-full bg-white px-7 py-2.5 font-medium text-red-700 shadow transition-all hover:bg-red-50 active:scale-95"
      >
        Go Home
        <svg
          className="transition group-hover:translate-x-0.5"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="#c53030"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
