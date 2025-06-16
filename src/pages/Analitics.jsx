import React from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Dummy user data
const userData = [
  { name: "Anubhav", email: "anubhav@example.com", messages: 40 },
  { name: "Priya", email: "priya@example.com", messages: 22 },
  { name: "Rohan", email: "rohan@example.com", messages: 34 },
  { name: "Kavya", email: "kavya@example.com", messages: 15 },
];

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "messages",
    header: "Messages",
  },
];

const messageData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Messages",
      data: [15, 25, 18, 30, 22, 15, 35],
      fill: false,
      borderColor: "#6366f1",
      backgroundColor: "#6366f1",
      tension: 0.5,
    },
  ],
};

const doughnutData = {
  labels: userData.map((u) => u.name),
  datasets: [
    {
      label: "Total Messages",
      data: userData.map((u) => u.messages),
      backgroundColor: ["#6366f1", "#ec4899", "#f59e0b", "#10b981"],
      borderWidth: 5,
    },
  ],
};

const Analytics = () => {
  const table = useReactTable({
    data: userData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="min-h-screen px-6 max-md:p-0 py-10 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10"
      >
        📊 Admin Analytics Dashboard
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 mb-10 max-md:mb-0 max-md:w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-300 p-6 max-md:p-2 rounded-xl shadow-md w-full h-[90%] max-md:overflow-x-auto "
        >
          <h3 className="text-3xl text-center font-semibold mb-4 dark:text-black">
            Messages in Last 7 Days
          </h3>
          <Line data={messageData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-300 p-10 max-md:p-2 rounded-xl shadow-md h-[90%] pb-20"
        >
          <h3 className="text-3xl font-semibold mb-4 text-center dark:text-black">
            User Message Share
          </h3>
          <Doughnut
            data={doughnutData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white dark:bg-gray-600 p-6 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-semibold mb-6">User Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="p-3 font-medium">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;
