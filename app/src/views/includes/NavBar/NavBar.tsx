export default function NavBar() { 
    return (
        <nav className="lg:hidden py-6 px-6 border-b">
        <div className="flex items-center justify-between">
          <a className="text-2xl font-semibold" href="#">
            <img
              className="h-10"
              src="artemis-assets/logos/artemis-logo-light.svg"
              alt=""
              width="auto"
            />
          </a>
          <button className="navbar-burger flex items-center rounded focus:outline-none">
            <svg
              className="text-white bg-indigo-500 hover:bg-indigo-600 block h-8 w-8 p-2 rounded"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
    )
}
