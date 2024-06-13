import React from 'react';

type props = {
  className?: string;
  done?: number;
  max?: number;
  radius?: number;
  stroke?: string;
  strokeWidth?: number;
};

export const CircleCountdown: React.FC<props> = (props) => {
  const {
    className,
    done = 0,
    max = 60,
    radius = 72,
    stroke = '#000',
    strokeWidth = 5,
  } = props;
  const size = (radius + strokeWidth) * 2;
  const length = Math.ceil(2 * radius * Math.PI);
  const remainingLength =
    length - Math.ceil(2 * radius * Math.PI) * (done / max);
  return (
    <>
      <svg
        className={className}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            className="circle"
            r={radius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            stroke={stroke}
            strokeDasharray={length}
            strokeDashoffset={remainingLength}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            className="circle--bg"
            r={radius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            stroke="rgba(0, 0, 0, .1)"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            fill="none"
          />
        </g>
      </svg>
    </>
  );
};
