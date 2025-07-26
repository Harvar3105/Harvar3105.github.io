"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootRedirect() {
  // redirect('/en');

  const router = useRouter();

  useEffect(() => {
    router.replace("/en");
  }, [router]);

  return (
    <div>
      <p>Redirecting to Localized version...</p>
    </div>
  );
}
