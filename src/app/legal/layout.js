import '@/styles/legal.css';

export const metadata = {
  robots: {
    index: false,
    follow: true,
    noarchive: true,
  },
};

export default function LegalLayout({ children }) {
  return <div className='legal'>{children}</div>
}