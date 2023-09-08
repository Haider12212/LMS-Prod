
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: {
    default: "LU Training and Development",
    template: "%s | LU Training and Development"
  },
  description: 'LU Training and Development provides online courses like freelancig and designing and cheaper price than every other institute in market.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
