import React from "react";

const Features = () => {
  return (
    <section className="my-12" id="features">
      <h1 className="text-5xl lg:text-7xl text-center tracking-tight my-4 font-bold lg:font-semibold px-5">
        Save{" "}
        <span className="font-bold text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
          97%
        </span>{" "}
        On Support Costs{" "}
        <span className="text-base lg:text-sm font-bold tracking-normal">
          (Literally)
        </span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-4 lg::space-x-12">
        <div class="flex bg-red-600 shadow-lg rounded-xl text-white mx-4 ">
          <div class=" p-4">
            <table class="w-full">
              <thead>
                <tr className="">
                  <th class="text-left text-xl font-light py-4">
                    Recruiting a support rep
                  </th>
                  <th class="text-right text-xl py-4">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left text-xl font-light py-2">
                    Job Posting + Recruitment
                  </td>
                  <td class="text-right text-2xl font-medium py-2">$280</td>
                </tr>
                <tr>
                  <td class="text-left text-xl font-light py-2">
                    Background Checks
                  </td>
                  <td class="text-right text-2xl font-medium py-2">$120</td>
                </tr>
                <tr>
                  <td class="text-left text-xl font-light py-2">Interviews</td>
                  <td class="text-right text-2xl font-medium py-2">$500</td>
                </tr>
                <tr>
                  <td class="text-left text-xl font-light py-2">
                    Employee Benefits
                  </td>
                  <td class="text-right text-2xl font-medium py-2">
                    $2860 - $5470
                  </td>
                </tr>
                <tr>
                  <td class="text-left text-xl font-light py-2">Training</td>
                  <td class="text-right text-2xl font-medium py-2">$2000</td>
                </tr>
                <tr>
                  <td class="text-left text-xl font-light py-2">
                    Avg Salary of a Support Rep
                  </td>
                  <td class="text-right text-2xl font-medium py-2">$32,175</td>
                </tr>
                <tr>
                  <td class="text-left text-xl font-light py-2">Taxes</td>
                  <td class="text-right text-2xl font-medium py-2">7.65%+</td>
                </tr>
                <hr class="h-px my-1.5 bg-gray-200 border-0"></hr>
                <tr>
                  <td class="text-left text-xl font-bold py-4">Total Cost</td>
                  <td class="text-right text-2xl font-bold py-4">~$40,830</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex flex-col items-center bg-gradient-to-tr from-blue-700 via-blue-800 to-blue-900 shadow-lg rounded-xl text-white mx-4 ">
          <div class="px-8 py-28 flex flex-col items-center">
            <h1 className="text-5xl my-2">Cost of Noel</h1>
            <h2 className="text-6xl text-center">
              <span className="text-7xl font-bold tracking-tight">$49</span> per
              month
            </h2>
            <h2 className="text-lg my-4">
              or <span className="line-through">$588</span>{" "}
              <span className="font-bold">$529</span> per year
            </h2>
            <a href="/get-started" class="my-2 buttoncl">
              Get started
            </a>
            <h2 className="text-lg my-4">No hidden fees what-so-ever.</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
