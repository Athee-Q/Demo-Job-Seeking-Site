"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background dark:bg-(--color-dark-background)">
        <p className="text-(--color-text) dark:text-(--color-dark-text)">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background dark:bg-(--color-dark-background) p-6">
      <div className="w-full max-w-md bg-(--color-secondary) dark:bg-(--color-dark-secondary) p-8 rounded-lg shadow-lg flex flex-col items-center gap-6">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-(--color-primary) dark:border-(--color-dark-primary)"
          />
        )}

        <div className="text-center">
          <h1 className="text-2xl font-bold text-(--color-text) dark:text-(--color-dark-text)">
            {session?.user?.name || "No Name"}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">{session?.user?.email}</p>
        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-4 p-3 w-full rounded bg-(--color-alert) text-white font-semibold hover:opacity-90 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
