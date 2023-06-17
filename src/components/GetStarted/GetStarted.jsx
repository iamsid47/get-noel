import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import NextSteps from "./NextSteps";

const GetStarted = () => {
  return (
    <section>
      <Navbar />
      <section>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto my-12">
            <div className="px-5">
              <h2 className="font-bold text-center lg:text-left text-6xl my-1">
                Let's get you up and running
              </h2>
              <p className="text-gray-600 mb-6 mt-4 text-center lg:text-left px-7">
                To set up Noel on your website, we require some details from
                you.
              </p>

              <div className="bg-white rounded shadow-lg p-8 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600 mb-6 mt-3">
                    <p className="font-medium text-lg">Your Details</p>
                    <p>All the fields are required.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <form action="">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label for="full_name">Full Name</label>
                          <input
                            required
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Jon Doe"
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label for="company">Company</label>
                          <input
                            required
                            type="text"
                            name="company"
                            id="company"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Sample, Inc."
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label for="website">Website</label>
                          <input
                            required
                            type="text"
                            name="url"
                            id="url"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="www.sample.com"
                          />
                        </div>

                        <div className="md:col-span-5">
                          <label for="email">Email Address</label>
                          <input
                            required
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="email@domain.com"
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label for="phone">Phone</label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            id="phone"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="+1 698 759 2108"
                          />
                        </div>

                        <div className="md:col-span-3">
                          <label for="address">Business Address / Street</label>
                          <input
                            required
                            type="text"
                            name="address"
                            id="address"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label for="city">City</label>
                          <input
                            required
                            type="text"
                            name="city"
                            id="city"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label for="country">Country / Region</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              required
                              name="country"
                              id="country"
                              placeholder="Country"
                              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label for="state">State / Province</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              required
                              name="state"
                              id="state"
                              placeholder="State"
                              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-1">
                          <label for="zipcode">Zipcode</label>
                          <input
                            required
                            type="text"
                            name="zipcode"
                            id="zipcode"
                            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-5 text-right my-3">
                          <div className="inline-flex items-end">
                            <button type="submit" className="buttoncl">
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NextSteps />
      <Footer />
    </section>
  );
};

export default GetStarted;
