import { memo, SVGProps } from 'react';

const PhoneNumberIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 11.936V14.336C16.0018 14.7865 15.8136 15.2169 15.4817 15.5215C15.1497 15.8261 14.7047 15.9766 14.256 15.936C11.7943 15.6685 9.4296 14.8273 7.352 13.48C5.41906 12.2517 3.78027 10.6129 2.552 8.68C1.19998 6.59296 0.358594 4.2168 0.096 1.744C0.0555786 1.2967 0.205018 0.853002 0.507813 0.521297C0.810608 0.189592 1.23888 0.000422929 1.688 -2.29775e-08H4.088C4.89109 -0.00790415 5.5756 0.580774 5.688 1.376C5.7893 2.14405 5.97716 2.89818 6.248 3.624C6.46779 4.2087 6.32721 4.86784 5.888 5.312L4.872 6.328C6.01084 8.33084 7.66916 9.98916 9.672 11.128L10.688 10.112C11.1322 9.67279 11.7913 9.53221 12.376 9.752C13.1018 10.0228 13.8559 10.2107 14.624 10.312C15.4285 10.4255 16.0202 11.1238 16 11.936Z'
      stroke='#45C29F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(PhoneNumberIcon);
export { Memo as PhoneNumberIcon };
