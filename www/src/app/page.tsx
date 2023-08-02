import Image from 'next/image'

export default function Home() {
  return (
    <section className="relative">
    <img
      className="absolute left-0 top-0"
      src="flaro-assets/images/headers/gradient.svg"
      alt=""
    />
    <img
      className="absolute right-0 bottom-0"
      src="flaro-assets/images/headers/gradient2.svg"
      alt=""
    />
    <div className="container mx-auto overflow-hidden">
      <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto mr-14">
              <a href="#">
                <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
              </a>
            </div>
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-16">
                <li className="mr-9 font-medium hover:text-gray-700">
                  <a href="#">Features</a>
                </li>
                <li className="mr-9 font-medium hover:text-gray-700">
                  <a href="#">Solutions</a>
                </li>
                <li className="mr-9 font-medium hover:text-gray-700">
                  <a href="#">Resources</a>
                </li>
                <li className="font-medium hover:text-gray-700">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <div className="inline-block">
                <button
                  className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  type="button"
                >
                  Start 14 Days Free Trial
                </button>
              </div>
            </div>
            <div className="w-auto lg:hidden">
              <a href="#">
                <svg
                  className="navbar-burger text-indigo-600"
                  width={51}
                  height={51}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={28} fill="currentColor" />
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
        <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <a className="inline-block" href="#">
                    <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                  </a>
                </div>
                <div className="w-auto p-2">
                  <a className="navbar-burger" href="#">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#111827"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-16 w-full">
              <ul>
                <li className="mb-12">
                  <a className="font-medium hover:text-gray-700" href="#">
                    Features
                  </a>
                </li>
                <li className="mb-12">
                  <a className="font-medium hover:text-gray-700" href="#">
                    Solutions
                  </a>
                </li>
                <li className="mb-12">
                  <a className="font-medium hover:text-gray-700" href="#">
                    Resources
                  </a>
                </li>
                <li>
                  <a className="font-medium hover:text-gray-700" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="block">
                    <button
                      className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                      type="button"
                    >
                      Start 14 Days Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div className="relative z-10 overflow-hidden pt-16">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <p className="mb-5 text-sm text-indigo-600 font-semibold uppercase tracking-px">
            👋 Meet new Flaro
          </p>
          <h1 className="mb-9 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
            The Ultimate Webinar Tool
          </h1>
          <div className="mb-7 md:inline-block">
            <button
              className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
              type="button"
            >
              Start 14 Days Free Trial
            </button>
          </div>
          <div className="mb-16 block">
            <a className="inline-block text-black hover:text-gray-800" href="#">
              <div className="flex flex-wrap items-center -m-1.5">
                <div className="w-auto p-1.5">
                  <svg
                    width={11}
                    height={13}
                    viewBox="0 0 11 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.18003 11.4261C2.8586 12.3918 1 11.448 1 9.81135V3.43865C1 1.80198 2.8586 0.858209 4.18003 1.82387L8.5403 5.01022C9.63359 5.80916 9.63359 7.44084 8.5403 8.23978L4.18003 11.4261Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-auto p-1.5">
                  <p className="font-medium">See how the magic happens</p>
                </div>
              </div>
            </a>
          </div>
          <div className="relative max-w-max mx-auto">
            <img
              className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000"
              src="flaro-assets/images/headers/dashboard.png"
              alt=""
            />
            <img
              className="hidden xl:block absolute -left-52 top-16"
              src="flaro-assets/images/headers/card.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
