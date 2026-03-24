export function SchoolCrest({
  size = 48,
  className = "",
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SMSS School Crest"
    >
      <title>SMSS School Crest</title>
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="#1E6FD9"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M24 8 L36 18 L36 32 L24 40 L12 32 L12 18 Z"
        fill="#0B3A6A"
        stroke="white"
        strokeWidth="1.5"
      />
      <text
        x="24"
        y="27"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Poppins, sans-serif"
      >
        SMSS
      </text>
      <path
        d="M16 20 L24 14 L32 20"
        stroke="#FFD700"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="24" cy="14" r="2" fill="#FFD700" />
    </svg>
  );
}
