import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Chart from 'chart.js/auto';

const Compare = () => {
  const [selectedCompareOption, setSelectedCompareOption] = useState("2 Months");
  const [isCompareDropdownVisible, setIsCompareDropdownVisible] = useState(false);
  const compareOptions = ["3 Months", "4 Months", "5 Months", "6 Months"];
  const compareDropdownTimeout = useRef(null);

  const handleCompareSelect = (option) => {
    setSelectedCompareOption(option);
    closeCompareDropdown();
  };

  const openCompareDropdown = () => {
    clearTimeout(compareDropdownTimeout.current);
    setIsCompareDropdownVisible(true);
  };

  const closeCompareDropdown = () => {
    compareDropdownTimeout.current = setTimeout(() => {
      setIsCompareDropdownVisible(false);
    }, 500); // Set the delay time in milliseconds (1000ms = 1 second)
  };

  useEffect(() => {
    return () => {
      // Cleanup the timeout on component unmount
      clearTimeout(compareDropdownTimeout.current);
    };
  }, []);

  const [selectedTagOption, setSelectedTagOption] = useState("SIPs");
  const [isTagDropdownVisible, setIsTagDropdownVisible] = useState(false);
  const tagOptions = ["SIPs", "Travel", "Shopping", "Food", "Bills"];
  const tagDropdownTimeout = useRef(null);
  const chartRef = useRef(null); // Add this line to define chartRef

  const handleTagSelect = (option) => {
    setSelectedTagOption(option);
    closeTagDropdown();
  };

  const openTagDropdown = () => {
    clearTimeout(tagDropdownTimeout.current);
    setIsTagDropdownVisible(true);
  };

  const closeTagDropdown = () => {
    tagDropdownTimeout.current = setTimeout(() => {
      setIsTagDropdownVisible(false);
    }, 500); // Set the delay time in milliseconds (1000ms = 1 second)
  };

  useEffect(() => {
    return () => {
      // Cleanup the timeout on component unmount
      clearTimeout(tagDropdownTimeout.current);
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Comparison Option:", selectedCompareOption);
    console.log("Tag Option:", selectedTagOption);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/mongodb');
      if (!response || !response.data) {
        throw new Error('Error retrieving data from MongoDB');
      }

      const expensesData = response.data;
      console.log(response.data);
      console.log('Fetched data:', expensesData);

      const tagTotals = {};
      expensesData.forEach((expense) => {
        if (expense.May.wallet) {
          Object.keys(expense.May.wallet).forEach((tag) => {
            const amount = expense.May.wallet[tag].total;

            if (tagTotals[tag]) {
              tagTotals[tag] += amount;
            } else {
              tagTotals[tag] = amount;
            }
          });
        }
      });

      console.log('Calculated wallet:', tagTotals);

      // Save the chart reference
      chartRef.current = renderChart(tagTotals);
    } catch (error) {
      console.error('Error occurred while retrieving data from MongoDB', error);
    }
  };

  const renderChart = (wallet) => {
    const canvas = document.getElementById("myChart");
    const ctx = canvas.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const newChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(wallet),
        datasets: [
          {
            label: "Total Expenses",
            data: Object.values(wallet),
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
    });

    return newChart;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className="flex items-center justify-center bg-slate-500 ">
          <h1 className="mt-6 mb-6 text-4xl font-bold">Track your Finance</h1>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className="pl-8 mt-6 mb-6 text-2xl font-semibold text-gray-600">
            Compare to your previous records
          </h2>

          <form onSubmit={handleFormSubmit}>
            <div className="flex space-x-4">
              {/* Compare Dropdown */}
              <div className="relative inline-block pl-10 text-left group">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm pl-7 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="compare-options-menu"
                  onMouseEnter={openCompareDropdown}
                  onMouseLeave={closeCompareDropdown}
                  aria-haspopup="true"
                  aria-expanded={isCompareDropdownVisible}
                >
                  {selectedCompareOption}
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    isCompareDropdownVisible ? "block" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="compare-options-menu"
                  onMouseEnter={openCompareDropdown}
                  onMouseLeave={closeCompareDropdown}
                >
                  <div className="py-1" role="none">
                    {compareOptions.map((option, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCompareSelect(option);
                        }}
                      >
                        {option}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tag Dropdown */}
              <div className="relative inline-block pl-10 text-left group">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm pl-7 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="tag-options-menu"
                  onMouseEnter={openTagDropdown}
                  onMouseLeave={closeTagDropdown}
                  aria-haspopup="true"
                  aria-expanded={isTagDropdownVisible}
                >
                  {selectedTagOption}
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    isTagDropdownVisible ? "block" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="tag-options-menu"
                  onMouseEnter={openTagDropdown}
                  onMouseLeave={closeTagDropdown}
                >
                  <div className="py-1" role="none">
                    {tagOptions.map((option, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTagSelect(option);
                        }}
                      >
                        {option}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Report Button */}
              <div className="relative inline-block pl-10 text-left group">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Report
                </button>
              </div>
            </div>
          </form>
          <div className="pt-12">
            <section
              className="text-gray-600 bg-black border-4 rounded-xl body-font"
              style={{ height: "30rem" }}
            >
              <div className="container flex items-center justify-center h-full">
                <canvas id="myChart"></canvas>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
