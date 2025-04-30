export function filterJobs(jobs, filters) {
    return jobs.filter((job) => {
      const matchKeywords = filters.keywords
        ? job.keywords.toLowerCase().includes(filters.keywords.toLowerCase())
        : true;
  
      const matchLocation = filters.location
        ? job.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;
  
      const matchRemote = filters.remote ? job.location.toLowerCase() === 'remote' : true;
  
      const matchMinSalary = filters.minSalary ? job.minSalary >= +filters.minSalary : true;
      const matchMaxSalary = filters.maxSalary ? job.maxSalary <= +filters.maxSalary : true;
  
      const matchJobType = filters.jobType ? job.jobType === filters.jobType : true;
  
      return matchKeywords&&matchLocation && matchRemote && matchMinSalary && matchMaxSalary && matchJobType;
    });
  }
  