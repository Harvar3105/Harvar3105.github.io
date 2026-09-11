import React from 'react';

export function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><title>eye-line</title><path fill="none" stroke="currentColor" strokeWidth="2" d="M21 12c0 2.5-4.03 7-9 7s-9-4.5-9-7s4.03-7 9-7s9 4.5 9 7Z"/><path fill="none" stroke="currentColor" strokeWidth="2" d="M11.012 10.262a3 3 0 0 0 2.725 2.725A1.997 1.997 0 0 1 10 12c0-.745.408-1.394 1.012-1.738Z"/></svg>
  );
}

export default Eye;