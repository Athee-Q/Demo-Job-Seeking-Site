import JobListView from "@/components/job/JobListView";
import Head from "next/head";

export default function JobsPage() {
  return (
    <>
       <Head>
        <title>Explore Jobs at TalentHive - Find Your Next Opportunity</title>
        <meta
          name="description"
          content="Discover job openings at TalentHive tailored for your skills and preferences. Filter by location, salary, and type to find your perfect role today."
        />
      </Head>
      <JobListView />
    </>
  );
}
