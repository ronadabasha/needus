import localFont from 'next/font/local';

const inconsolata = localFont({
  src: [
    {
      path: './Inconsolata-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Inconsolata-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-inconsolata',
});

const inter = localFont({
  src: [
    {
      path: './Inter-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    
  ],
  display: 'swap',
  variable: '--font-inter',
});

export default {
  inconsolata,
  inter,
};
