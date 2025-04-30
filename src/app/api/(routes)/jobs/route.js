import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // ✅ Load the file dynamically from the public folder
    const filePath = path.join(process.cwd(), "db", "data.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const jobsData = JSON.parse(fileData);

    return NextResponse.json(jobsData);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}