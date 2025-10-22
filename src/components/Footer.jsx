export default function Footer() {
  return (
    <>
      <footer className="w-full bg-white px-6 pt-10 text-sm text-slate-500 md:mt-12 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="https://prebuiltui.com">
              <img
                className={`h-12 w-12 rounded-full object-center`}
                src="/logo.png"
                alt=""
              />
            </a>
            <p className="mt-6 text-sm/7">
              Experience comfort, elegance, and unforgettable stays with Ogo
              Hotel — your gateway to world-class hospitality.
            </p>
          </div>
          <div className="flex flex-col lg:items-center lg:justify-center">
            <div className="flex flex-col space-y-2.5 text-sm">
              <h2 className="mb-5 font-semibold text-gray-800">Company</h2>
              <a className="transition hover:text-slate-600" href="#">
                About us
              </a>
              <a className="transition hover:text-slate-600" href="#">
                Careers
                <span className="ml-2 rounded-md border bg-gray-500 px-2 py-1 text-xs text-white">
                  We’re hiring!
                </span>
              </a>
              <a className="transition hover:text-slate-600" href="#">
                Contact us
              </a>
              <a className="transition hover:text-slate-600" href="#">
                Privacy policy
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-5 font-semibold text-gray-800">
              Subscribe to our newsletter
            </h2>
            <div className="max-w-sm space-y-6 text-sm">
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className="flex items-center justify-center gap-2 rounded-md bg-gray-200 p-2">
                <input
                  className="w-full max-w-64 rounded px-2 py-2 ring-gray-300 outline-none focus:ring-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="rounded bg-gray-700 px-4 py-2 text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 border-t border-slate-200 py-4 text-center">
          Copyright 2025 ©{" "}
          <a
            target="_blank"
            className="mx-2 inline-block rounded-md border px-3 py-0.5"
            href="https://github.com/Sobhan-asadi"
          >
            Sobhan-github🙄
          </a>
          All Right Reserved.
        </p>
      </footer>
    </>
  );
}
