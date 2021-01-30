import React, { useEffect } from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
// import { getPackage } from "../../actions/profile";
const PackagePrice = () => {
  // useEffect(() => {
  //     getPackage();
  //   }, []);
  return (
    <div>
      {/* <div class=""> */}

      <div class="block pl-2  text-center font-semibold text-xl self-start text-gray-700">
        <h1 class="leading-relaxed">Select the Package</h1>
      </div>
      <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                Select
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Package Name
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                SubCategory
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Price
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    {/* <div class="text-sm leading-5 text-gray-800">#1</div> */}
                    <label class="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-gray-600"
                      />
                    </label>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">
                  Tenant Background Report
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600"
                  />{" "}
                  Identity Check
                </label>
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600"
                  />{" "}
                  Address Check
                </label>
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600"
                  />{" "}
                  Reference Check
                </label>
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600"
                  />{" "}
                  Criminal Check via Court Record
                </label>
                
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                2846
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                It includes Identity Check Address Check
              </td>
              {/* <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                  View Details
                </button>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div class="max-w-md mx-auto">
              <div class="flex items-center space-x-5">
                <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono"></div>
                <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 class="leading-relaxed">Add The Package</h2>
                  {/* <p class="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
                </div>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* <div class="flex flex-col">
                    <label class="leading-loose">Client Name</label>
                    <input
                      type="text"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Client Name"
                    />
                  </div> */}
                  <div class="flex flex-col">
                    <label class="leading-loose">Type Of Package</label>
                    {/* <select type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" ></select> */}
                    <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                      <option>Choose a package</option>
                      <option>Tenant Background Report</option>
                      <option>Baby Sitter Background Report</option>
                      <option>Driver Background Report</option>
                      {/* <option>Black</option>
                                            <option>Orange</option>
                                            <option>Purple</option>
                                            <option>Gray</option>
                                            <option>White</option> */}
                    </select>
                  </div>
                  {/* <div class="flex items-center space-x-4">
                    <div class="flex flex-col">
                      <label class="leading-loose">Start</label>
                      <div class="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="text"
                          class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="25/02/2020"
                        />
                        <div class="absolute left-3 top-2">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <label class="leading-loose">End</label>
                      <div class="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="text"
                          class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="26/02/2020"
                        />
                        <div class="absolute left-3 top-2">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div class="flex flex-col">
                    <label class="leading-loose">Description</label>
                    <input
                      type="text"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div class="pt-4 flex items-center space-x-4">
                  {/* <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                        <svg
                                            class="w-6 h-6 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            ></path>
                                        </svg>{" "}
                    Cancel
                  </button> */}
                  <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-20 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="flex flex-col items-center">
          <div class="bg-white overflow-hidden rounded-lg w-full relative pb-36">
            <img
              src="../assets/img/tenant1.jpg"
              class="absolute h-full w-full object-cover object-center"
              alt=""
            />
          </div>
          <div class="z-10 -mt-12 px-6 w-full">
            <div class="bg-white shadow-lg rounded-lg py-5 px-5">
              <span class="font-bold text-gray-800 text-lg">
                Tenant Background Report
              </span>
              <div class="flex items-center justify-between">
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                  </label>
                </div>{" "}
                <div class="text-2xl text-red-600 font-bold">₹ 2846</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="bg-white overflow-hidden rounded-lg w-full relative pb-36">
            <img
              src=""
              class="absolute h-full w-full object-cover object-center"
              alt=""
            />
          </div>

          <div class="z-10 -mt-12 px-6 w-full">
            <div class="bg-white shadow-lg rounded-lg py-5 px-5">
              <span class="font-bold text-gray-800 text-lg">
                Baby Sitter Background Report
              </span>
              <div class="flex items-center justify-between">
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    {/* <span class="ml-2">Option 1</span> */}
                  </label>
                </div>{" "}
                <div class="text-2xl text-red-600 font-bold">₹ 2846</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="bg-white overflow-hidden rounded-lg w-full relative pb-36">
            <img
              src="../assets/img/vehicle.jpg"
              class="absolute h-full w-full object-cover object-center"
              alt=""
            />
          </div>
          <div class="z-10 -mt-12 px-6 w-full">
            <div class="bg-white shadow-lg rounded-lg py-5 px-5">
              <span class="font-bold text-gray-800 text-lg">
                Driver Background Report
              </span>
              <div class="flex items-center justify-between">
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    {/* <span class="ml-2">Option 1</span> */}
                  </label>
                </div>{" "}
                <div class="text-2xl text-red-600 font-bold">₹ 2846</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="bg-white overflow-hidden rounded-lg w-full relative pb-36">
            <img
              src="Baby Sitter Background Report"
              class="absolute h-full w-full object-cover object-center"
              alt=""
            />
          </div>
          <div class="z-10 -mt-12 px-6 w-full">
            <div class="bg-white shadow-lg rounded-lg py-5 px-5">
              <span class="font-bold text-gray-800 text-lg">
                Landlord Background Report
              </span>
              <div class="flex items-center justify-between">
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    {/* <span class="ml-2">Option 1</span> */}
                  </label>
                </div>{" "}
                <div class="text-2xl text-red-600 font-bold">₹ 2846</div>
              </div>
            </div>
          </div>

          <div class="content-center mt-8">
            <button class="flex content-center uppercase  shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-7 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
      <table class="border-collapse w-full mt-8">
        <thead>
          <tr>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Package Name
            </th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Price
            </th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
              <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Tenant Background{" "}
              </span>
              Tenant Background Report
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Country
              </span>
              ₹ 2846
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Status
              </span>
              <span class="rounded bg-blue-400 py-1 px-3 text-xs font-bold">
                active
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// PackagePrice.prototype = {
//     getPackage: Proptypes.func.isRequired,
// }
// const mapStateToProps = (state) => ({
//     profile:state.profile.profile,
//     price: state.profile
// })
export default PackagePrice;
