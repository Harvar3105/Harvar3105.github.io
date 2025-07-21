'use client';

import { useEffect, useState } from 'react';
import Fireflies from '../animations/fireflies';
import { useFireflies } from '../providers/FirefliesContextProvider';

export default function FirefliesConsumer() {
  const [mounted, setMounted] = useState(false);
  const { count } = useFireflies();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? <Fireflies count={count} />
    : null; 
}
