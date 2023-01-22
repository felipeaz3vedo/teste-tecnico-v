interface MoonIconProps {
  fill: 'default' | 'hover';
}

export function MoonIcon({ fill }: MoonIconProps) {
  return (
    <svg
      className="
      w-[18px]
      h-[18px]
      fill-blue-50
      ease-in-out
      hover:fill-purple-700
      hover:cursor-pointer
      transition"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <g>
        <path
          d="M9.957 18a8.983 8.983 0 006.991-3.332.422.422 0
          00-.406-.68c-4.367.83-8.377-2.517-8.377-6.925 0-2.539
          1.36-4.874 3.569-6.131A.422.422 0 0011.6.15 9 9 0 00.957 9a9 9 0 009 9z"
        ></path>
      </g>
    </svg>
  );
}
