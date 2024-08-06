"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col gap-4">
        {data ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        )}

        {data?.user && (
          <div>
            {data.user.image && (
              <img src={data.user.image} width={50} height={50} />
            )}
            <p>name: {data.user.name}</p>
            <p>email: {data.user.email}</p>
          </div>
        )}
      </div>
    </main>
  );
}
