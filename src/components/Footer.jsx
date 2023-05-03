import React from "react";

const Footer = () => {
  return (
    <section>
      <section class="bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight  text-white">
              Let's find more that brings us together.
            </h2>
            <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups, Watch and Marketplace.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="/"
                class="inline-flex items-center justify-center px-3 text-sm py-1  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer class="bg-gray-800 shadow">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-100 sm:text-center ">
            © 2023{" "}
            <a href="/" class="hover:underline">
              Kulthe Media, Limited
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-100  sm:mt-0">
            <li>
              <a href="/" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/" class="mr-4 hover:underline md:mr-6">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" class="mr-4 hover:underline md:mr-6">
                Terms
              </a>
            </li>
            <li>
              <a href="/" class="hover:underline">
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
