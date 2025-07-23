'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type FirefliesContextType = {
  count: number;
  changeCount: (newCount: number) => void;
};

const FirefliesContext = createContext<FirefliesContextType | undefined>(undefined);

export function FirefliesProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const stored = localStorage.getItem('Fireflies');
    if (stored === null) return;

    const parsed = parseInt(stored);
    if (!isNaN(parsed)) setCount(parsed);
  }, []);

  const changeCount = (newCount: number) => {
    if (newCount < 0) newCount = 0;
    localStorage.setItem('Fireflies', newCount.toString());
    setCount(newCount);
  };

  return (
    <FirefliesContext.Provider value={{ count, changeCount }}>
      {children}
    </FirefliesContext.Provider>
  );
}

export function useFireflies() {
  const context = useContext(FirefliesContext);
  if (!context) {
    throw new Error('useFireflies must be used within a FirefliesProvider');
  }
  return context;
}
