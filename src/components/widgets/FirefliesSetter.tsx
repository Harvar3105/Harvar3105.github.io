"use client";

import { ChangeEvent } from "react";
import { useFireflies } from "../providers/FirefliesContextProvider";

export default function FirefliesSetter() {
    const { count, changeCount } = useFireflies();

    const setChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue)) {
        changeCount(newValue);
        }
    };

    return(
        <div className="ml-2 px-3 h-10 text-gray-600 rounded-full bg-[var(--accent-color)] flex items-center justify-center">
            <img
            src="/firefly.svg"
            alt="Firefly svg"
            className="w-8 h-8"
            />
            <input 
            type="number"
            title="Fireflies"
            min="0"
            value={count}
            onChange={setChange}
            className="p-1 border rounded text-sm text-center transition-all duration-200 ease-in-out no-spinner font-bold"
            style={{ width: `${Math.max(2, count.toString().length + 2)}ch` }}
            />
        </div>
    );
}