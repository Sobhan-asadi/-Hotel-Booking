export default function NewsLetter() {
  return (
    <div className="bg-slate-50 px-6 pt-8 pb-8 md:mt-20 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-2 my-30 flex w-full max-w-5xl flex-col items-center rounded-2xl bg-gray-900 px-4 py-12 text-white md:py-16 lg:mx-auto lg:w-full">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-[40px]">Stay Inspired</h1>
          <p className="mt-2 max-w-xl text-sm text-gray-500/90 md:text-base">
            Join our newsletter and be the first to discover new updates,
            exclusive offers, and inspiration.
          </p>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
          <input
            type="text"
            className="w-full max-w-66 rounded border border-white/20 bg-white/10 px-4 py-2.5 outline-none"
            placeholder="Enter your email"
          />
          <button className="group flex items-center justify-center gap-2 rounded bg-black px-4 py-2.5 transition-all active:scale-95 md:px-7">
            Subscribe
            <svg
              className="h-4 w-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
    </div>
  );
}
