import React from "react";

export function CardTravel() {
  return (
    <div className="max-w-[300px] overflow-hidden rounded-xl bg-white shadow">
      <div className="aspect-square bg-red-500">
        <img
          src="https://villa-harmony-peak-kvariati.hotelmix.co.th/data/Photos/OriginalPhoto/13632/1363204/1363204946/Villa-Harmony-Peak-Kvariati-Exterior.JPEG"
          alt="Travel"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-1 p-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-500">
            Villa
          </span>
          <span className="flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
            <svg
              className="h-5 w-5 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z"
                clip-rule="evenodd"
              />
            </svg>
            4.7
          </span>
        </div>

        <h6 className="text-lg font-semibold">Harmony Peaks Villa</h6>
        <div className="flex items-start gap-1">
          <svg
            className="h-5 w-5 text-teal-500"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
            </g>
          </svg>
          <span className="text-sm text-slate-400">New York, USA</span>
        </div>
        <div className="text-sm text-slate-400">
          <span className="text-base font-semibold text-teal-500">
            $2,000
          </span>{" "}
          /month
        </div>
      </div>
    </div>
  ); 
}
