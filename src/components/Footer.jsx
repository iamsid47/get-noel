import React from "react";

const Footer = () => {
  return (
    <section>
      <section className="bg-gradient-to-tr from-sky-600 via-blue-700 to-blue-900">
        <div className="py-8 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
          <div className="max-w-screen-sm py-5 lg:py-0">
            <h2 className="mb-4 text-3xl md:text-4xl tracking-tight text-white">
              Our Commitment Towards You.
            </h2>
            <p className="mb-8 font-light text-white">
              We wanted to make the right pricing model, keep things simple,
              clean, and transparent to our customers. Thus, we charge{" "}
              <span className="font-bold">ZERO FEES</span> for setting up your
              account, no service fees, no hidden costs, no upsells, no
              downsells, or any fake promises. Just one price that pays for
              everything. Inclusive of taxes.
            </p>
            <a href="/get-started" className="buttoncl my-4">
              Try Noel For Free
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-100 sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:underline underline-offset-4">
              Kulthe Media, Limited
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-100  sm:mt-0">
            <li>
              <a
                href="/privacy"
                className="mr-4 hover:underline md:mr-6 underline-offset-4"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="mr-4 hover:underline md:mr-6 underline-offset-4"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="mailto:sid@kulthe.com"
                className="hover:underline underline-offset-4"
              >
                Help
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
