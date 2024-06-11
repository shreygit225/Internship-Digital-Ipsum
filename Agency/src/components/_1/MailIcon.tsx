import { memo, SVGProps } from 'react';

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.75 0H15.75C16.7125 0 17.5 0.7875 17.5 1.75V12.25C17.5 13.2125 16.7125 14 15.75 14H1.75C0.7875 14 0 13.2125 0 12.25V1.75C0 0.7875 0.7875 0 1.75 0Z'
      stroke='#45C29F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 1.75L8.75 7.875L0 1.75'
      stroke='#45C29F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MailIcon);
export { Memo as MailIcon };
