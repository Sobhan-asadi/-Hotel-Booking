const revenueData = [
  { month: "Apr", value: 6200 },
  { month: "May", value: 7800 },
  { month: "Jun", value: 7100 },
  { month: "Jul", value: 9600 },
  { month: "Aug", value: 10400 },
  { month: "Sep", value: 11800 },
  { month: "Oct", value: 12480 },
];

const CHART_WIDTH = 700;
const CHART_HEIGHT = 220;
const TOP_PADDING = 15;
const BOTTOM_PADDING = 20;
const MAX_VALUE = 14000;

function getPoint(value, index) {
  const x = (index / (revenueData.length - 1)) * CHART_WIDTH;

  const usableHeight = CHART_HEIGHT - TOP_PADDING - BOTTOM_PADDING;

  const y = TOP_PADDING + usableHeight - (value / MAX_VALUE) * usableHeight;

  return { x, y };
}

const points = revenueData.map((item, index) => getPoint(item.value, index));

const linePath = points
  .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
  .join(" ");

const areaPath = `${linePath} L ${CHART_WIDTH} ${CHART_HEIGHT} L 0 ${CHART_HEIGHT} Z`;

export default function RevenueChart() {
  return (
    <section className="border-primary-900/[0.07] rounded-[24px] border bg-white p-5 shadow-[0_8px_30px_rgba(20,40,32,0.035)] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-accent-700 text-[10px] font-bold tracking-[0.14em] uppercase">
            Performance
          </p>

          <h2 className="text-primary-950 mt-1.5 text-lg font-semibold tracking-[-0.02em]">
            Revenue overview
          </h2>

          <p className="mt-1 text-xs text-zinc-400">
            Demo revenue over the last 7 months
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] font-semibold tracking-[0.1em] text-zinc-400 uppercase">
            Current
          </p>

          <p className="text-primary-950 mt-1 text-xl font-semibold tracking-[-0.03em]">
            $12,480
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex">
          <div className="flex h-[220px] w-11 shrink-0 flex-col justify-between pb-5 text-[10px] text-zinc-400">
            <span>$14k</span>
            <span>$10k</span>
            <span>$6k</span>
            <span>$2k</span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="relative h-[220px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col justify-between pb-5"
              >
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="border-primary-900/[0.07] border-t border-dashed"
                  />
                ))}
              </div>

              <svg
                viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                preserveAspectRatio="none"
                role="img"
                aria-label="Demo revenue trend from April to October"
                className="relative z-10 h-full w-full overflow-visible"
              >
                <defs>
                  <linearGradient
                    id="revenue-area-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#477363" stopOpacity="0.2" />

                    <stop offset="100%" stopColor="#477363" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path d={areaPath} fill="url(#revenue-area-gradient)" />

                <path
                  d={linePath}
                  fill="none"
                  stroke="#365b4e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />

                {points.map((point, index) => (
                  <circle
                    key={revenueData[index].month}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="#ffffff"
                    stroke="#365b4e"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
            </div>

            <div className="mt-3 grid grid-cols-7">
              {revenueData.map((item) => (
                <span
                  key={item.month}
                  className="text-center text-[10px] font-medium text-zinc-400"
                >
                  {item.month}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
