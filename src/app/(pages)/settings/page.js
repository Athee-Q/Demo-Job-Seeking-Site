"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SettingsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }

    if (session?.user) {
      setName(session.user.name || "");
      setEmail(session.user.email || "");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background dark:bg-(--color-dark-background)">
        <p className="text-(--color-text) dark:text-(--color-dark-text)">Loading...</p>
      </div>
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("This will be connected to API to update user settings (future).");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background dark:bg-(--color-dark-background) p-6">
      <div className="w-full max-w-md bg-(--color-secondary) dark:bg-(--color-dark-secondary) p-8 rounded-lg shadow-lg flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold text-(--color-text) dark:text-(--color-dark-text)">Settings</h1>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-transparent text-(--color-text) dark:text-(--color-dark-text)"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            disabled
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
          />

          <button
            type="submit"
            className="bg-(--color-primary) dark:bg-(--color-dark-primary) text-white p-2 rounded hover:opacity-90 transition-colors"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
