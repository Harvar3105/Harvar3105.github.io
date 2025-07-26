"use client";

import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootRedirect() {
  // redirect('/en');

  const router = useRouter();

  useEffect(() => {
    router.replace("/en");
  }, [router]);

  return (
    <div>
      <p>Redirecting to English version...</p>
    </div>
  );
}
