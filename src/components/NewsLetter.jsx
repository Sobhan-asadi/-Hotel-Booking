import { useState } from "react";
import { HiArrowRight, HiCheck, HiOutlineMail } from "react-icons/hi";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setMessage("Enter your email address.");
      return;
    }

    setMessage("Thanks — you're on the list.");
    setEmail("");
  }

  return (
    <section className="page-container py-20 sm:py-24 lg:py-28">
      <div className="bg-primary-950 relative overflow-hidden rounded-[32px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="bg-primary-600/30 absolute -top-40 -right-32 h-[380px] w-[380px] rounded-full blur-3xl"
        />

        <div
          aria-hidden="true"
          className="bg-accent-600/15 absolute -bottom-44 -left-28 h-[360px] w-[360px] rounded-full blur-3xl"
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="bg-accent-300 h-px w-8" />

              <p className="text-accent-200 text-xs font-semibold tracking-[0.2em] uppercase">
                Travel notes
              </p>
            </div>

            <h2 className="font-display mt-5 text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Inspiration for your
              <span className="block text-white/55">next remarkable stay.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Discover selected stays, destination ideas and occasional offers
              for your next journey.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-[24px] border border-white/10 bg-white/[0.07] p-2 backdrop-blur-md"
            >
              <div className="flex flex-col gap-2 sm:flex-row">
                <label className="relative flex min-h-14 flex-1 items-center">
                  <span className="sr-only">Email address</span>

                  <HiOutlineMail
                    aria-hidden="true"
                    className="absolute left-4 text-lg text-white/45"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);

                      if (message) {
                        setMessage("");
                      }
                    }}
                    placeholder="Your email address"
                    autoComplete="email"
                    required
                    className="h-14 w-full rounded-[17px] bg-transparent pr-4 pl-11 text-sm text-white outline-none placeholder:text-white/35"
                  />
                </label>

                <button
                  type="submit"
                  className="group bg-accent-200 text-primary-950 flex min-h-14 shrink-0 items-center justify-center gap-2.5 rounded-[17px] px-6 text-sm font-semibold transition duration-300 hover:bg-white"
                >
                  Subscribe
                  <HiArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>

            <div className="mt-4 min-h-5">
              {message ? (
                <p
                  role="status"
                  className="text-accent-200 flex items-center gap-2 text-xs font-medium"
                >
                  <HiCheck aria-hidden="true" />
                  {message}
                </p>
              ) : (
                <p className="text-xs leading-5 text-white/40">
                  Demo subscription — no marketing emails are sent.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
