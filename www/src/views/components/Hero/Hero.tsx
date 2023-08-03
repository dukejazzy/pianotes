export type CallToActionProps = {
  url?: string,
  label?: string
}

export type HeroProps = {
  title?: string,
  subTitle?:string,
  cta?: {
    primary?: CallToActionProps,
    secondary?: CallToActionProps
  }
}

export function defaultProps(): HeroProps {
  return {
    subTitle: "Pianotes",
    title: "🎹 Pianotes - Sharing the Joy of Intelligent Music Education & Community."
  }
}

export default function Hero(props: HeroProps) {


  function CallToActionPrimary() {
    return (
      <>
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
      </>
    )
  }

  const { title, subTitle } = props;

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
      
        <div className="relative z-10 overflow-hidden pt-16">
          <div className="container px-4 mx-auto">
            <div className="text-center">
              <p className="mb-5 text-sm text-indigo-600 font-semibold uppercase tracking-px">
                {!subTitle ? defaultProps().subTitle : subTitle}
              </p>
              <h1 className="mb-9 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
              {!title ? defaultProps().title : title}
              </h1>
            <CallToActionPrimary/>
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