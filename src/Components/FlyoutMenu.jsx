
/* Menu showed when hovering the link */
export default function FlyoutMenu() {
    return (
      <div className="w-64 shadow-xl font-sans">
        <div
          className="absolute left-1/2 top-2 bg-white text-black p-0"
          style={{opacity: 1, transform: "translateY(0px) translateX(-50%) translateZ(0px)"}}
        >
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent p-0">
            {""}
          </div>
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white">
            {" "}
          </div>
          <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="mb-3 space-y-3">
                <h3 className="font-semibold">For Individuals</h3>
                <a href="#" className="block text-sm hover:underline">
                  Introduction
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Pay as you go
                </a>
              </div>
              <div className="mb-6 space-y-3">
                <h3 className="font-semibold">For Companies</h3>
                <a href="#" className="block text-sm hover:underline">
                  Startups
                </a>
                <a href="#" className="block text-sm hover:underline">
                  SMBs
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Enterprise
                </a>
              </div>
            </div>
            <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    );
  }