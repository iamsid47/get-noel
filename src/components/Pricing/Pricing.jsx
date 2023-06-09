import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Unmetered Chat Sessions",
  "Unlimited Chat Logs",
  "Noel Improves Itself",
  "Customer Engagement Tracking",
  "99.9% Uptime",
  "Noel Chat Widget",
  "Weekly Reports",
  "No-cost Setup",
];

const Pricing = () => {
  return (
    <section>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 ">
              Simple no-tricks pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our pricing is based on the value of our products and services,
              not on gimmicks or tricks. We believe that you should be able to
              get the best possible value without having to play games.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-xl">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                Monthly Pricing
              </h3>
              <p className="mt-6 pr-3 text-base leading-7 text-gray-600">
                Our monthly plan gives you 30 days of unlimited access to Noel.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-xl font-semibold leading-6 text-blue-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul className="mt-8 grid gap-4 text-sm leading-6 text-gray-600 grid-cols-2">
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
                  <p className="mt-12 flex items-baseline justify-center gap-x-2 mb-6">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $49
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a href="/get-started" className="buttoncl">
                    Try Free For 30 Days
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Inclusive of all taxes.
                  </p>

                  <p className="mt-6 text-sm leading-5 text-gray-600 font-medium">
                    For a yearly pricing of{" "}
                    <span className="line-through">$588</span>{" "}
                    <span className="font-bold text-lg">$529</span>,{" "}
                    <a
                      href="mailto:sid@kulthe.com"
                      className="hover:underline underline-offset-8 text-blue-700"
                    >
                      contact sales
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto text-center max-w-sm md:max-w-xl">
            <p className="text-gray-600 text-md mt-12">
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
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
