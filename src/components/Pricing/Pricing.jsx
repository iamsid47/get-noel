import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const Pricing = () => {
  return (
    <section>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-6xl font-bold tracking-tight text-gray-900">
              Simple no-tricks pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-xl">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                Monthly Pricing
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
                amet indis perferendis blanditiis repellendus etur quidem
                assumenda.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-md px-8">
                  <div className="flex gap-x-2 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                    <span className="text-base font-semibold text-gray-600">
                      30 Days Money Back Guarantee
                    </span>
                  </div>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $100
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a
                    href="/"
                    className="rounded-lg hover:bg-gray-800 px-2.5 py-1.5 text-sm  hover:text-white shadow-sm hover:shadow-xl bg-blue-700  transition duration-200 mt-10 block  text-center  font-semibold text-white"
                  >
                    Try Free For 30 Days
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Inclusive of all taxes.
                  </p>

                  <p className="mt-6 text-sm leading-5 text-gray-600 font-medium">
                    For a yearly pricing of{" "}
                    <span className="line-through">$1200</span>{" "}
                    <span className="font-bold text-lg">$759</span>,{" "}
                    <a
                      href="/"
                      className="hover:underline underline-offset-8 text-blue-700"
                    >
                      contact sales
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-gray-400 text-xs mt-12">
              Check out our{" "}
              <a
                href="/"
                className="text-blue-700 hover:underline underline-offset-8"
              >
                terms of service
              </a>{" "}
              and{" "}
              <a
                href="/"
                className="text-blue-700 hover:underline underline-offset-8"
              >
                privacy policy
              </a>{" "}
              before purchase.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
