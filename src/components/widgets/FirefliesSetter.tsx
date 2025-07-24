"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useFireflies } from "../providers/FirefliesContextProvider";

/* eslint-disable @next/next/no-img-element */
export default function FirefliesSetter() {
  const { count, changeCount } = useFireflies();
  const [inputValue, setInputValue] = useState(count.toString());

  useEffect(() => {
    setInputValue(count.toString());
  }, [count]);

  const setChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value === "") {
      setInputValue("");
      return;
    }

    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      setInputValue(value);
      changeCount(parsed);
    }
  };

  return (
    <div className="px-3 h-10 text-gray-600 rounded-full bg-[var(--accent-color)] flex items-center justify-center">
      <img src="/firefly.svg" alt="Firefly svg" className="w-8 h-8" />
      <input
        type="number"
        title="Fireflies"
        min="0"
        value={inputValue}
        onChange={setChange}
        className="p-1 border rounded text-sm text-center transition-all duration-200 ease-in-out no-spinner font-bold"
        style={{ width: `${Math.max(2, count.toString().length + 2)}ch` }}
      />
    </div>
  );
}
/* eslint-enable @next/next/no-img-element */
