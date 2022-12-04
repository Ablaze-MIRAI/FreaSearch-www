import React from 'react';

export interface LogoProps {
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ height = 120, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 677.77 140"
      className={className}
    >
      <path
        d="M233.56,30.26v8.79h-22.61v13.92h17.33v8.63h-17.33v22.94h-10.88V30.26h33.48Zm18.57,17.89c1.34-2.23,3.23-4.07,5.48-5.37,2.36-1.32,5.03-1.99,7.73-1.94v11.43h-2.87c-3.42,0-6,.8-7.73,2.41-1.74,1.61-2.6,4.41-2.6,8.4v21.47h-10.88V41.46h10.88v6.69Zm60.52,13.92c.01,1.41-.09,2.81-.31,4.2h-31.46c.1,2.77,1.27,5.39,3.26,7.31,1.92,1.77,4.46,2.71,7.07,2.64,4.04,0,6.91-1.74,8.62-5.21h11.73c-1.21,4.1-3.72,7.69-7.15,10.23-3.52,2.67-7.85,4.01-12.97,4.01-3.89,.06-7.73-.89-11.15-2.76-3.26-1.81-5.93-4.53-7.69-7.82-1.89-3.59-2.84-7.61-2.76-11.67-.09-4.08,.85-8.12,2.72-11.74,1.73-3.28,4.37-5.98,7.61-7.78,3.46-1.86,7.34-2.8,11.27-2.72,3.83-.06,7.61,.85,10.99,2.64,3.19,1.71,5.81,4.32,7.54,7.51,1.83,3.43,2.76,7.27,2.68,11.16Zm-11.26-3.11c.02-1.28-.24-2.54-.76-3.7-.52-1.16-1.3-2.2-2.27-3.02-2.02-1.7-4.59-2.6-7.23-2.53-2.49-.07-4.92,.8-6.8,2.45-1.92,1.78-3.12,4.2-3.38,6.81h20.43Zm16.39,3.89c-.08-4.02,.82-7.99,2.6-11.59,1.58-3.2,4.03-5.9,7.07-7.78,3.01-1.82,6.47-2.77,9.98-2.72,2.93-.07,5.83,.6,8.43,1.94,2.27,1.18,4.25,2.85,5.79,4.9v-6.14h10.95v43.09h-10.95v-6.3c-1.5,2.11-3.49,3.83-5.79,5.02-2.63,1.36-5.55,2.04-8.51,1.98-3.5,.04-6.94-.94-9.91-2.8-3.04-1.93-5.48-4.66-7.07-7.89-1.79-3.64-2.68-7.65-2.6-11.71Zm33.87,.16c.07-2.36-.47-4.71-1.55-6.81-.96-1.82-2.42-3.33-4.2-4.36-1.72-1-3.68-1.52-5.67-1.52-1.96-.02-3.89,.5-5.59,1.48-1.75,1.03-3.19,2.52-4.16,4.32-1.1,2.07-1.65,4.38-1.59,6.73-.05,2.37,.49,4.71,1.59,6.81,.97,1.84,2.42,3.39,4.2,4.47,1.67,1.02,3.6,1.56,5.55,1.56,1.99,0,3.95-.52,5.67-1.52,1.78-1.03,3.23-2.54,4.2-4.36,1.08-2.1,1.62-4.44,1.55-6.81Zm58.81,22.09c-3.5,.05-6.98-.61-10.22-1.94-2.87-1.17-5.35-3.11-7.19-5.6-1.79-2.52-2.74-5.54-2.72-8.63h11.65c.03,.99,.25,1.97,.66,2.88,.41,.91,.99,1.73,1.71,2.41,1.64,1.37,3.74,2.07,5.87,1.94,2.54,0,4.53-.61,5.98-1.83,.71-.58,1.27-1.31,1.64-2.14,.38-.83,.56-1.73,.53-2.65,.03-.73-.09-1.45-.34-2.13-.25-.68-.64-1.3-1.13-1.84-1.04-1.07-2.3-1.91-3.69-2.45-2-.77-4.03-1.43-6.1-1.98-2.93-.82-5.8-1.85-8.58-3.07-2.24-1.04-4.19-2.62-5.67-4.59-1.58-2.05-2.37-4.78-2.37-8.21-.07-2.98,.77-5.91,2.41-8.4,1.68-2.44,4.02-4.35,6.76-5.48,3.15-1.32,6.53-1.97,9.94-1.91,5.59,0,10.14,1.36,13.63,4.08,3.5,2.72,5.43,6.52,5.79,11.39h-11.96c-.04-.9-.27-1.77-.68-2.57-.41-.8-.99-1.5-1.69-2.05-1.68-1.28-3.76-1.93-5.87-1.83-1.84-.09-3.65,.49-5.09,1.63-.65,.6-1.16,1.33-1.49,2.16-.33,.82-.47,1.71-.41,2.59-.02,.67,.1,1.34,.35,1.96,.25,.62,.62,1.19,1.09,1.66,1.03,1,2.24,1.8,3.57,2.33,1.43,.6,3.43,1.28,6.02,2.06,2.95,.83,5.83,1.87,8.62,3.11,2.26,1.07,4.24,2.67,5.75,4.67,1.61,2.07,2.41,4.8,2.41,8.17,.01,2.85-.77,5.65-2.25,8.09-1.59,2.57-3.88,4.63-6.6,5.95-3.22,1.55-6.76,2.31-10.33,2.22Zm68.6-23.02c.01,1.41-.09,2.81-.31,4.2h-31.47c.1,2.77,1.27,5.39,3.26,7.31,1.92,1.77,4.46,2.71,7.07,2.64,4.04,0,6.92-1.74,8.62-5.21h11.73c-1.21,4.1-3.72,7.69-7.15,10.23-3.52,2.67-7.85,4.01-12.98,4.01-3.89,.06-7.73-.89-11.15-2.76-3.26-1.81-5.93-4.53-7.69-7.82-1.89-3.59-2.84-7.61-2.76-11.67-.09-4.08,.85-8.12,2.72-11.74,1.72-3.28,4.37-5.98,7.61-7.78,3.46-1.86,7.34-2.8,11.26-2.72,3.83-.06,7.61,.85,10.99,2.64,3.19,1.71,5.81,4.32,7.54,7.51,1.83,3.43,2.76,7.27,2.68,11.16Zm-11.27-3.11c.02-1.28-.24-2.54-.76-3.7-.52-1.16-1.3-2.2-2.27-3.02-2.02-1.7-4.59-2.6-7.23-2.53-2.49-.07-4.92,.8-6.8,2.45-1.92,1.78-3.12,4.2-3.38,6.81h20.43Zm16.39,3.89c-.08-4.02,.82-7.99,2.6-11.59,1.58-3.2,4.03-5.9,7.07-7.78,3.01-1.82,6.47-2.77,9.98-2.72,2.93-.07,5.83,.6,8.43,1.94,2.27,1.18,4.25,2.85,5.79,4.9v-6.14h10.95v43.09h-10.95v-6.3c-1.5,2.11-3.48,3.83-5.79,5.02-2.63,1.36-5.55,2.04-8.51,1.98-3.5,.04-6.94-.94-9.91-2.8-3.04-1.93-5.48-4.66-7.07-7.89-1.79-3.64-2.68-7.65-2.6-11.71Zm33.87,.16c.07-2.36-.47-4.71-1.55-6.81-.96-1.82-2.42-3.33-4.2-4.36-1.72-1-3.68-1.52-5.67-1.52-1.96-.02-3.89,.5-5.59,1.48-1.75,1.03-3.19,2.52-4.16,4.32-1.1,2.07-1.65,4.38-1.59,6.73-.05,2.37,.49,4.71,1.59,6.81,.97,1.84,2.42,3.39,4.2,4.47,1.67,1.02,3.6,1.56,5.55,1.56,1.99,0,3.95-.52,5.67-1.52,1.78-1.03,3.23-2.54,4.2-4.36,1.08-2.1,1.62-4.44,1.55-6.81Zm32.48-14.86c1.34-2.23,3.23-4.07,5.48-5.37,2.36-1.32,5.03-1.99,7.73-1.94v11.43h-2.87c-3.42,0-5.99,.8-7.73,2.41-1.74,1.61-2.6,4.41-2.6,8.4v21.47h-10.88V41.46h10.88v6.69Zm17.71,14.86c-.09-4.07,.84-8.1,2.72-11.71,1.72-3.25,4.34-5.95,7.54-7.78,3.37-1.88,7.18-2.83,11.03-2.76,5.33,0,9.75,1.34,13.25,4.01,3.58,2.81,6.07,6.78,7.03,11.24h-11.73c-.55-1.77-1.65-3.31-3.15-4.39-1.61-1.1-3.53-1.66-5.48-1.59-1.41-.06-2.81,.22-4.09,.81-1.28,.59-2.41,1.47-3.29,2.58-1.81,2.26-2.72,5.46-2.72,9.61s.91,7.27,2.72,9.53c.88,1.11,2,1.99,3.29,2.58,1.28,.59,2.68,.86,4.09,.81,4.4,0,7.28-1.97,8.62-5.91h11.73c-1.02,4.4-3.52,8.33-7.07,11.12-3.52,2.75-7.92,4.12-13.21,4.12-3.86,.07-7.66-.88-11.03-2.76-3.2-1.83-5.81-4.52-7.54-7.78-1.88-3.61-2.81-7.64-2.72-11.71Zm73.81-22.17c3.04-.06,6.04,.68,8.7,2.14,2.57,1.46,4.64,3.65,5.94,6.3,1.5,3.11,2.23,6.54,2.14,9.99v25.28h-10.88v-23.8c0-3.42-.85-6.05-2.56-7.89-.9-.93-1.99-1.66-3.2-2.14-1.21-.48-2.5-.69-3.79-.62-3,0-5.37,.92-7.11,2.76-1.74,1.84-2.6,4.47-2.6,7.89v23.8h-10.88V26.99h10.88v19.83c1.46-1.92,3.39-3.43,5.59-4.39,2.44-1.09,5.1-1.63,7.77-1.59Z"
        fill="#101111"
      />
      <g>
        <path
          d="M51.22,107.39c-3.47,0-6.92-.35-10.32-1.04-6.55-1.34-12.77-3.96-18.3-7.71-8.23-5.56-14.67-13.39-18.55-22.55-1.31-3.1-2.31-6.32-2.98-9.62-1.31-6.42-1.38-13.03-.23-19.47v.2c0,8.2,2.38,16.22,6.85,23.09,4.47,6.87,10.84,12.29,18.34,15.6,7.49,3.31,15.79,4.37,23.87,3.05,8.08-1.32,15.61-4.97,21.66-10.5,6.05-5.53,10.37-12.7,12.42-20.63,2.06-7.94,1.76-16.3-.85-24.08-2.61-7.77-7.42-14.62-13.84-19.71-6.42-5.09-14.19-8.19-22.35-8.94,1.41-.12,2.85-.18,4.26-.18,3.46,0,6.92,.35,10.31,1.04,6.55,1.34,12.77,3.96,18.3,7.71,8.23,5.56,14.67,13.39,18.54,22.54,1.31,3.1,2.31,6.32,2.98,9.62,1.39,6.81,1.39,13.84,0,20.65-1.34,6.55-3.96,12.78-7.7,18.32-5.56,8.24-13.38,14.69-22.52,18.56-3.1,1.31-6.32,2.31-9.61,2.99-3.39,.69-6.85,1.04-10.31,1.04"
          fill="#7a171c"
        />
        <path
          d="M25.6,100.5c-3-1.73-5.82-3.77-8.41-6.06-5-4.44-9.08-9.82-12-15.84C.84,69.66-.83,59.65,.39,49.79c.42-3.34,1.16-6.63,2.22-9.82,2.08-6.21,5.31-11.97,9.53-16.98-.03,.06-.07,.12-.1,.17-4.1,7.1-6.04,15.24-5.6,23.43,.44,8.19,3.25,16.07,8.09,22.69,4.84,6.62,11.49,11.69,19.15,14.59,7.66,2.9,16,3.51,24,1.75s15.32-5.81,21.06-11.65c5.75-5.85,9.67-13.24,11.29-21.28,1.62-8.04,.88-16.37-2.15-24-3.02-7.62-8.19-14.2-14.88-18.93,1.28,.6,2.55,1.27,3.78,1.98,3,1.73,5.82,3.77,8.41,6.07,5,4.44,9.08,9.82,12,15.84,4.35,8.93,6.02,18.94,4.8,28.81-.42,3.34-1.16,6.63-2.22,9.82-2.2,6.6-5.71,12.68-10.32,17.89-4.43,5-9.81,9.09-15.82,12.01-8.93,4.35-18.92,6.02-28.78,4.81-3.34-.41-6.62-1.16-9.81-2.22-3.29-1.1-6.45-2.53-9.45-4.26"
          fill="#ba2022"
        />
        <path
          d="M28.47,0c2.01,0,3.97,.6,5.64,1.71,1.67,1.12,2.97,2.71,3.74,4.56,.77,1.86,.97,3.9,.58,5.88-.39,1.97-1.36,3.78-2.78,5.21-1.42,1.42-3.23,2.39-5.2,2.78-1.97,.39-4.01,.19-5.87-.58-1.86-.77-3.44-2.07-4.56-3.74-1.12-1.67-1.71-3.64-1.71-5.65,0-2.7,1.07-5.28,2.97-7.19,1.9-1.91,4.49-2.98,7.18-2.98"
          fill="#ba2022"
        />
      </g>
    </svg>
  );
};

const LogoIcon: React.FC<LogoProps> = ({ height = 30, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 102.38 107.39"
      className={className}
    >
      <g>
        <path
          d="M51.22,107.39c-3.47,0-6.92-.35-10.32-1.04-6.55-1.34-12.77-3.96-18.3-7.71-8.23-5.56-14.67-13.39-18.55-22.55-1.31-3.1-2.31-6.32-2.98-9.62-1.31-6.42-1.38-13.03-.23-19.47v.2c0,8.2,2.38,16.22,6.85,23.09s10.84,12.29,18.34,15.6c7.49,3.31,15.79,4.37,23.87,3.05,8.08-1.32,15.61-4.97,21.66-10.5,6.05-5.53,10.37-12.7,12.42-20.63,2.06-7.94,1.76-16.3-.85-24.08-2.61-7.77-7.42-14.62-13.84-19.71-6.42-5.09-14.19-8.19-22.35-8.94,1.41-.12,2.85-.18,4.26-.18,3.46,0,6.92,.35,10.31,1.04,6.55,1.34,12.77,3.96,18.3,7.71,8.23,5.56,14.67,13.39,18.54,22.54,1.31,3.1,2.31,6.32,2.98,9.62,1.39,6.81,1.39,13.84,0,20.65-1.34,6.55-3.96,12.78-7.7,18.32-5.56,8.24-13.38,14.69-22.52,18.56-3.1,1.31-6.32,2.31-9.61,2.99-3.39,.69-6.85,1.04-10.31,1.04"
          fill="#7a171c"
        />
        <path
          d="M25.6,100.5c-3-1.73-5.82-3.77-8.41-6.06-5-4.44-9.08-9.82-12-15.84C.84,69.66-.83,59.65,.39,49.79c.42-3.34,1.16-6.63,2.22-9.82,2.08-6.21,5.31-11.97,9.53-16.98-.03,.06-.07,.12-.1,.17-4.1,7.1-6.04,15.24-5.6,23.43,.44,8.19,3.25,16.07,8.09,22.69s11.49,11.69,19.15,14.59c7.66,2.9,16,3.51,24,1.75s15.32-5.81,21.06-11.65c5.75-5.85,9.67-13.24,11.29-21.28s.88-16.37-2.15-24c-3.02-7.62-8.19-14.2-14.88-18.93,1.28,.6,2.55,1.27,3.78,1.98,3,1.73,5.82,3.77,8.41,6.07,5,4.44,9.08,9.82,12,15.84,4.35,8.93,6.02,18.94,4.8,28.81-.42,3.34-1.16,6.63-2.22,9.82-2.2,6.6-5.71,12.68-10.32,17.89-4.43,5-9.81,9.09-15.82,12.01-8.93,4.35-18.92,6.02-28.78,4.81-3.34-.41-6.62-1.16-9.81-2.22-3.29-1.1-6.45-2.53-9.45-4.26"
          fill="#ba2022"
        />
        <path
          d="M28.47,0c2.01,0,3.97,.6,5.64,1.71,1.67,1.12,2.97,2.71,3.74,4.56,.77,1.86,.97,3.9,.58,5.88-.39,1.97-1.36,3.78-2.78,5.21-1.42,1.42-3.23,2.39-5.2,2.78-1.97,.39-4.01,.19-5.87-.58-1.86-.77-3.44-2.07-4.56-3.74-1.12-1.67-1.71-3.64-1.71-5.65,0-2.7,1.07-5.28,2.97-7.19,1.9-1.91,4.49-2.98,7.18-2.98"
          fill="#ba2022"
        />
      </g>
    </svg>
  );
};

export default Logo;
export { LogoIcon };
