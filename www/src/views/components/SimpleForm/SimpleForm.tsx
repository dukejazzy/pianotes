export default function SimpleForm() {
    return (
        <section className="relative pt-28 pb-36 bg-blueGray-100 overflow-hidden">
  <div className="relative z-10 container px-4 mx-auto">
    <p className="mb-6 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
      Contact us
    </p>
    <h2 className="mb-14 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight md:max-w-xl mx-auto">
      Have Some Questions? Let’s Get Connected
    </h2>
    <form
      className="px-11 pt-9 pb-11 bg-white bg-opacity-80 md:max-w-xl mx-auto rounded-4xl shadow-12xl"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <h3 className="mb-8 text-xl text-center font-semibold leading-normal md:max-w-sm mx-auto">
        Send us a message to know more about us or just chit-chat.
      </h3>
      <label className="block mb-4">
        <input
          className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
          id="contactInput5-1"
          type="text"
          placeholder="First & last name"
        />
      </label>
      <label className="block mb-4">
        <input
          className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
          id="contactInput5-2"
          type="text"
          placeholder="First & last name"
        />
      </label>
      <label className="block mb-4">
        <textarea
          className="p-4 w-full h-48 font-medium text-gray-500 placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 resize-none rounded-lg focus:ring focus:ring-indigo-300"
          id="contactInput3-3"
          placeholder="Write message"
          data-sonic="detected"
          defaultValue={""}
        />
        <div
          className="ch-sonic-textarea-box"
          data-item="textarea"
          style={{
            zIndex: 999,
            height: 190,
            width: 486,
            top: "262.583px",
            left: 44
          }}
        >
          <button
            className="textarea_btn_small ch-sonic-logo-btn"
            type="button"
          >
            <img
              src="chrome-extension://kchaponcodemjigejilffhfchecpgdpf/images/logo.png"
              alt="Sonic logo"
            />
          </button>
        </div>
      </label>
      <button
        className="py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
        type="button"
      >
        Send Message
      </button>
    </form>
  </div>
  <img
    className="absolute bottom-0 w-full object-cover transform hover:translate-y-4 transition ease-in-out duration-1000"
    style={{ height: 502 }}
    src="flaro-assets/images/contact/people.jpeg"
    alt=""
  />
</section>

    )
}