import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const GetStarted = () => {
  return (
    <section>
      <Navbar />
      <section>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto my-12">
            <div>
              <h2 class="font-semibold text-5xl my-1">
                Let's get you up and running
              </h2>
              <p class="text-gray-600 mb-6 mt-1">
                To set up Noel on your website, we require some details from
                you.
              </p>

              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600">
                    <p class="font-medium text-lg">Your Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div class="lg:col-span-2">
                    <form action="">
                      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                          <label for="full_name">Full Name</label>
                          <input
                            required
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>
                        <div class="md:col-span-5">
                          <label for="full_name">Company</label>
                          <input
                            required
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>
                        <div class="md:col-span-5">
                          <label for="full_name">Website</label>
                          <input
                            required
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>

                        <div class="md:col-span-5">
                          <label for="email">Email Address</label>
                          <input
                            required
                            type="text"
                            name="email"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="email@domain.com"
                          />
                        </div>

                        <div class="md:col-span-3">
                          <label for="address">Address / Street</label>
                          <input
                            required
                            type="text"
                            name="address"
                            id="address"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>

                        <div class="md:col-span-2">
                          <label for="city">City</label>
                          <input
                            required
                            type="text"
                            name="city"
                            id="city"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Country / Region</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              required
                              name="country"
                              id="country"
                              placeholder="Country"
                              class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            />
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <label for="state">State / Province</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              required
                              name="state"
                              id="state"
                              placeholder="State"
                              class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            />
                          </div>
                        </div>

                        <div class="md:col-span-1">
                          <label for="zipcode">Zipcode</label>
                          <input
                            required
                            type="text"
                            name="zipcode"
                            id="zipcode"
                            class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>

                        <div class="md:col-span-5 text-right my-3">
                          <div class="inline-flex items-end">
                            <button
                              type="submit"
                              class="inline-flex items-center justify-center px-3 text-sm py-1  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
                            >
                              Submit
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
      <Footer />
    </section>
  );
};

export default GetStarted;
