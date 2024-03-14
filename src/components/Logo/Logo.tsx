interface LogoProps extends React.SVGProps<SVGSVGElement> {
  color?: "primary" | "secondary";
}

function Logo({ color = "primary", ...props }: LogoProps) {
  return (
    <svg
      width={32}
      height={46}
      viewBox="0 0 32 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.08 42.07a6.105 6.105 0 00.426-2.41 13.644 13.644 0 011.806-6.508 13.856 13.856 0 014.717-4.88 6.063 6.063 0 001.88-1.538 5.945 5.945 0 001.11-2.141 5.885 5.885 0 00-.643-4.666 6 6 0 00-2.347-2.194 18.086 18.086 0 01-1.597-1.224l-1.274-1.226a12.948 12.948 0 01-3.662-8.943 6.077 6.077 0 00-.423-2.412A6.229 6.229 0 008.683.485 6.318 6.318 0 001.77 1.869 6.186 6.186 0 00.428 3.93a6.103 6.103 0 00-.426 2.412 6.017 6.017 0 00.87 3.036 6.117 6.117 0 002.29 2.197C7 13.961 9.669 18.523 9.669 23.01a12.906 12.906 0 01-3.594 8.883l-2.902 2.533A6.11 6.11 0 00.88 36.622 6.008 6.008 0 00.01 39.66c-.024.823.12 1.644.424 2.412a6.232 6.232 0 003.39 3.443 6.322 6.322 0 006.914-1.383 6.186 6.186 0 001.342-2.061zM20.554 9.752a6.114 6.114 0 01-1.055-3.43 6.138 6.138 0 011.833-4.362 6.314 6.314 0 017.89-.768 6.188 6.188 0 012.303 2.769 6.1 6.1 0 01.355 3.563 6.165 6.165 0 01-1.71 3.162 6.257 6.257 0 01-3.198 1.69 6.325 6.325 0 01-3.614-.352 6.234 6.234 0 01-2.804-2.272zM22.277 34.528a6.313 6.313 0 013.473-1.04v-.003a6.334 6.334 0 012.392.472c.759.31 1.447.765 2.026 1.337a6.112 6.112 0 01.78 7.792 6.233 6.233 0 01-2.807 2.276c-1.142.468-2.4.59-3.613.352a6.258 6.258 0 01-3.197-1.69 6.165 6.165 0 01-1.711-3.163 6.099 6.099 0 01.355-3.564 6.19 6.19 0 012.302-2.77z"
        fill={color === "primary" ? "#121212" : "#E0E0E0"}
      />
    </svg>
  );
}

export default Logo;