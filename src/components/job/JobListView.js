"use client";
import { useEffect, useState } from "react";
import { filterJobs } from "@/utils/filters";
import JobFilters from "@/components/job/JobFilters";
import JobCard from "@/components/job/JobCard";
import axios from "axios";

export default function JobListView() {
  const [filters, setFilters] = useState({
    location: "",
    minSalary: "",
    maxSalary: "",
    remote: false,
    jobType: "",
  });
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/jobs"); // Fetch jobs from API
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  const filteredJobs = filterJobs(jobs, filters);

  return (
    <main className="p-6 md:p-8 lg:p-10  bg-background text-text dark:bg-dark-background dark:text-dark-text min-h-screen ">
      <div className="text-4xl w-11/12 mx-auto font-bold text-center mb-8">JOB</div>

      <JobFilters filters={filters} setFilters={setFilters} />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.jobId} job={job} />)
        ) : (
          <div className="col-span-full text-center text-lg text-gray-500">
            No jobs found for your filters.
          </div>
        )}
      </div>
    </main>
  );
}

