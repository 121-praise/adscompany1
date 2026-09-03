interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-md bg-white ${className}`}>
      <img src="/ads-logo.svg" alt="ADS Transnational Field Services Ltd" className="h-full w-full object-contain" />
    </span>
  );
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  return (
    <span className={`inline-flex items-center rounded-md ${variant === 'light' ? 'bg-white px-2 py-1' : ''} ${className}`}>
      <img
        src="/ads-logo.svg"
        alt="ADS Transnational Field Services Ltd"
        className={`h-auto w-[185px] object-contain sm:w-[215px] ${variant === 'light' ? 'brightness-0' : ''}`}
      />
    </span>
  );
}
