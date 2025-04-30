import { motion } from "framer-motion";

export default function JobCard({ job }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group grid gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md transition"
    >
      <div className="flex items-center justify-center px-4 py-2 w-full bg-background/50 dar:bg-dark-primary/10 dark:group-hover:bg-background/10  group-hover:bg-accent/10 rounded-lg text-xl font-bold text-accent dark:text-dark-primary">
        {job.keywords}
      </div>
      <div>
        <div className="grid grid-cols-2 justify-start text-gray-600 dark:text-gray-400">
          <span className="font-bold">Company&nbsp;:</span>
          <span className="font-semibold">{job.company}</span>
        </div>
        <div className="grid grid-cols-2 justify-start text-gray-600 dark:text-gray-400">
          <span className="font-bold">Location&nbsp;:</span>
          <span className="font-semibold">{job.location}</span>
        </div>
        <div className="grid grid-cols-2 justify-start text-gray-600 dark:text-gray-400">
          <span className="font-bold">Min-Salary&nbsp;:</span>
          <span className="font-semibold">{job.minSalary}</span>
        </div>
        <div className="grid grid-cols-2 justify-start text-gray-600 dark:text-gray-400">
          <span className="font-bold">Max-Salary&nbsp;:</span>
          <span className="font-semibold">{job.maxSalary}</span>
        </div>
        <div className="grid grid-cols-2 justify-start text-gray-600 dark:text-gray-400">
          <span className="font-bold">Type&nbsp;:</span>
          <span className="font-semibold">{job.jobType}</span>
        </div>
      </div>
      <button className="mt-4 w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-opacity-90">
        View Details
      </button>
    </motion.div>
  );
}
