export default function JobFilters({ filters, setFilters }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center bg-white dark:bg-dark-background p-6 rounded-md inset-shadow-accent mb-8">
      <input
        className=" border border-accent text-accent  p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      />
      <input
        className=" border border-accent text-accent  p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        type="number"
        placeholder="Min Salary"
        value={filters.minSalary}
        onChange={(e) => setFilters({ ...filters, minSalary: e.target.value })}
      />
      <input
        className=" border border-accent text-accent  p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        type="number"
        placeholder="Max Salary"
        value={filters.maxSalary}
        onChange={(e) => setFilters({ ...filters, maxSalary: e.target.value })}
      />
      <select
        className=" border border-accent text-accent  p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        value={filters.jobType}
        onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
      >
        <option value="">All Job Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
}
