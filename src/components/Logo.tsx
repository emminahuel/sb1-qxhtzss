import { memo } from 'react';

const Logo = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className="h-12">
    <defs>
      <linearGradient id="smokeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#FF7E00', stopOpacity: 0.9 }}/>
        <stop offset="50%" style={{ stopColor: '#FF9940', stopOpacity: 0.5 }}/>
        <stop offset="100%" style={{ stopColor: '#FFB067', stopOpacity: 0.1 }}/>
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <g className="smoke-group" filter="url(#glow)">
      {/* Main smoke path with more complex animation */}
      <path
        d="M30,80 C35,75 40,70 38,60 C36,50 42,45 45,40 C48,35 46,25 50,20 C54,15 58,18 60,15 C62,12 60,8 65,5"
        fill="none" 
        stroke="url(#smokeGradient)" 
        strokeWidth="3"
        strokeLinecap="round"
        className="smoke-path main-smoke animate-float">
        <animate 
          attributeName="d" 
          dur="8s"
          repeatCount="indefinite"
          values="
            M30,80 C35,75 40,70 38,60 C36,50 42,45 45,40 C48,35 46,25 50,20 C54,15 58,18 60,15 C62,12 60,8 65,5;
            M30,80 C40,72 35,65 40,60 C45,55 40,45 48,40 C56,35 50,25 55,20 C60,15 55,12 62,5;
            M30,80 C38,75 42,68 40,62 C38,56 44,48 47,42 C50,36 48,28 52,22 C56,16 60,20 62,16;
            M30,80 C35,75 40,70 38,60 C36,50 42,45 45,40 C48,35 46,25 50,20 C54,15 58,18 60,15 C62,12 60,8 65,5"
        />
        <animate
          attributeName="opacity"
          dur="8s"
          repeatCount="indefinite"
          values="0.9;0.7;0.9;0.7;0.9"
        />
      </path>
      
      {/* Secondary smoke paths with offset animations */}
      <path
        d="M25,80 C30,70 35,65 32,55 C29,45 35,40 38,35 C41,30 39,20 43,15"
        fill="none" 
        stroke="url(#smokeGradient)" 
        strokeWidth="2"
        strokeLinecap="round"
        className="smoke-path secondary-smoke animate-float [animation-delay:-2s]"
        opacity="0.7">
        <animate
          attributeName="d"
          dur="7s"
          repeatCount="indefinite"
          values="
            M25,80 C30,70 35,65 32,55 C29,45 35,40 38,35 C41,30 39,20 43,15;
            M25,80 C35,72 30,65 35,58 C40,51 35,42 42,35 C49,28 44,20 48,15;
            M25,80 C30,70 35,65 32,55 C29,45 35,40 38,35 C41,30 39,20 43,15"
        />
      </path>
      
      <path
        d="M35,80 C40,75 45,70 42,60 C39,50 45,45 48,40 C51,35 49,25 53,20"
        fill="none" 
        stroke="url(#smokeGradient)" 
        strokeWidth="2"
        strokeLinecap="round"
        className="smoke-path tertiary-smoke animate-float [animation-delay:-4s]"
        opacity="0.5">
        <animate
          attributeName="d"
          dur="6s"
          repeatCount="indefinite"
          values="
            M35,80 C40,75 45,70 42,60 C39,50 45,45 48,40 C51,35 49,25 53,20;
            M35,80 C45,72 40,65 45,58 C50,51 45,42 52,35 C59,28 54,20 58,15;
            M35,80 C40,75 45,70 42,60 C39,50 45,45 48,40 C51,35 49,25 53,20"
        />
      </path>
    </g>

    {/* Enhanced text with better typography and subtle animation */}
    <g className="text-group">
      <text 
        x="75" 
        y="45" 
        fontFamily="Arial, sans-serif" 
        fontWeight="900" 
        letterSpacing="1"
        className="animate-float [animation-delay:-1s]">
        <tspan 
          fill="#1F2937" 
          fontSize="24"
          className="tracking-wider">
          ORANGE
        </tspan>
        <tspan 
          x="75" 
          y="70" 
          fill="#FF7E00" 
          fontSize="28"
          className="tracking-wide">
          SMOKE
        </tspan>
      </text>
    </g>

    {/* Decorative elements */}
    <circle 
      cx="185" 
      cy="25" 
      r="2" 
      fill="#FF7E00" 
      className="animate-pulse"
      opacity="0.6"
    />
    <circle 
      cx="175" 
      cy="15" 
      r="1.5" 
      fill="#FF7E00" 
      className="animate-pulse [animation-delay:-1s]"
      opacity="0.4"
    />
  </svg>
));

Logo.displayName = 'Logo';
export default Logo;