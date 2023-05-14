import React from "react";

const Footer = () => {
  return (
    <section>
      <section class="bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-sm">
            <h2 class="mb-4 text-3xl md:text-4xl tracking-tight  text-white">
              Our Commitment Towards You.
            </h2>
            <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We wanted to make the right pricing model, keep things simple,
              clean, and transparent to our customers. Thus, we charge{" "}
              <span className="font-bold">ZERO FEES</span> for setting up your
              account, no service fees, no hidden costs, no upsells, no
              downsells, or any fake promises. Just one price that pays for
              everything. Inclusive of taxes.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="/get-started"
                class="inline-flex items-center justify-center px-3 text-sm py-1  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Try Noel For Free
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer class="bg-gray-800 shadow">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-100 sm:text-center ">
            © 2023{" "}
            <a href="/" class="hover:underline underline-offset-4">
              Kulthe Media, Limited
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-100  sm:mt-0">
            <li>
              <a
                href="/privacy"
                class="mr-4 hover:underline md:mr-6 underline-offset-4"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                class="mr-4 hover:underline md:mr-6 underline-offset-4"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="mailto:sid@kulthe.com"
                class="hover:underline underline-offset-4"
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
