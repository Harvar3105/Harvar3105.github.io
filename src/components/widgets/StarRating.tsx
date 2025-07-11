import React from 'react';

type StarRatingProps = {
  total: number;
  filled: number;
  isLtr?: boolean;
  size?: number;
};

export default function StarRating({
  total,
  filled,
  isLtr = true,
  size = 20,
}: StarRatingProps) {
  const stars = Array.from({ length: total }, (_, i) => {
    const index = !isLtr ? total - 1 - i : i;
    const isFilled = index < filled;

    return (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFilled ? 'var(--star)' : 'var(--unstar)'}
        width={size}
        height={size}
        className="inline-block mx-[1px]"
      >
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  });

  return (
    <div className="flex">
      {stars}
    </div>
  );
}
