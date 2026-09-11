import React from 'react';

export function ArrowLeftAnimated(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><title>arrow-left-animated</title><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="20" d="M21 12h-17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path strokeDasharray="12" strokeDashoffset="12" d="M3 12l7 7M3 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to="0"/></path></g></svg>
  );
}

export default ArrowLeftAnimated;