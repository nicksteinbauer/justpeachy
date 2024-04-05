import { Open_Sans } from 'next/font/google'
import './scss/style.scss'
import Header from './components/Header'
import Footer from './components/Footer'

const open = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Marblehead Ohio Cottage Rental - Justy Peachy Marblehead Cottage',
  description: 'Discover the perfect Marblehead Ohio cottage rental for your next family vacation. Centrally located near Lakeside and various attractions, our spacious home offers comfort and convenience for memorable getaways.',
  keywords: 'Marblehead Ohio, cottage rental, vacation rental, Lake Erie islands, Marblehead Peninsula, Lakeside, Kelleys Island Ferry, Marblehead Lighthouse State Park',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
