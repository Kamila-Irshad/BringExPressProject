import { useState } from "react";

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: "Packman / Supervisor bring",
      location: "Berlin, Germany",
      earnings: "12.60€/hr",
    },
    {
      id: 2,
      title: "Bring driver Izmirr",
      location: "Izmir Bayrakli, Turkey",
      earnings: "5€/hr",
    },
    {
      id: 3,
      title: "Backwarenverkaufer(m/w/d)",
      location: "Hamburg, Germany",
      earnings: "20€/hr",
    },
    {
      id: 4,
      title: "Lieferando / Uber Eats / bringfood Rider",
      location: "Munich, Germany",
      earnings: "15€/hr",
    },
    {
      id: 5,
      title: "Lieferfahrer DHL Rohrdamm",
      location: "Paris, France",
      earnings: "18€/hr",
    },
    {
      id: 6,
      title: "DHL Driver Düsseldorf",
      location: "London, UK",
      earnings: "25€/hr",
    },
    {
      id: 7,
      title: "Lieferfahrer DHL Britz",
      location: "Madrid, Spain",
      earnings: "10€/hr",
    },
    {
      id: 8,
      title: "DHL Driver München",
      location: "Rome, Italy",
      earnings: "12€/hr",
    },
    {
      id: 9,
      title: "Delivery Rider",
      location: "Lisbon, Portugal",
      earnings: "14€/hr",
    },
    {
      id: 10,
      title: "DHL Driver Stuttgart",
      location: "Dublin, Ireland",
      earnings: "16€/hr",
    },
    {
      id: 11,
      title: "Bike Rider",
      location: "Vienna, Austria",
      earnings: "13€/hr",
    },
    {
      id: 12,
      title: "GLS Delivery driver",
      location: "Zurich, Switzerland",
      earnings: "30€/hr",
    },
    {
      id: 13,
      title: "DHL Driver Leipzig",
      location: "Stockholm, Sweden",
      earnings: "28€/hr",
    },
    {
      id: 14,
      title: "DHL Driver Erfurt",
      location: "Oslo, Norway",
      earnings: "22€/hr",
    },
    {
      id: 15,
      title: "Architect",
      location: "Helsinki, Finland",
      earnings: "24€/hr",
    },
    {
      id: 16,
      title: "Pilot",
      location: "Amsterdam, Netherlands",
      earnings: "40€/hr",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  return (
    <div className="px-4 mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left ">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-sm font-medium">Job Title</th>
              <th className="p-3 text-sm font-medium">Location</th>
              <th className="p-3 text-sm font-medium hidden md:table-cell">
                Earnings
              </th>
              <th className="p-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="p-3  border-y-2  text-sm font-semibold">{job.title}</td>
                <td className="p-3  border-y-2  text-sm">{job.location}</td>
                <td className="p-3  border-y-2  text-sm hidden md:table-cell">
                  {job.earnings}
                </td>
                <td className="p-3">
                  <button className="px-3 py-1 text-sm text-white bg-purple-500 rounded hover:bg-purple-600">
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 text-sm text-white rounded ${
            currentPage === 1 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          disabled={endIndex >= jobs.length}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 text-sm text-white rounded ${
            endIndex >= jobs.length
              ? "bg-gray-400"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Careers;
