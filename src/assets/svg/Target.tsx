export default function Target(){
  return(
    <svg className="w-full h-auto drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,100 L 200,100 M 100,0 L 100,200" fill="none" stroke="#8B5CF6" strokeDasharray="4 4" strokeWidth="1.5"/>
      <circle cx="100" cy="100" fill="none" r="80" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"/>
      <circle cx="100" cy="100" fill="none" r="40" stroke="#4f319c" strokeWidth="1" opacity="0.8"/>
      <circle cx="100" cy="100" fill="none" r="2" stroke="#8B5CF6" opacity="0.8"/>
    </svg>
  );
}