import { Open_Sans } from 'next/font/google'
import './scss/style.scss'
import Header from './components/Header'
import Footer from './components/Footer'

const open = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Justy Peachy Marblehead Cottage',
  description: 'Marblehead Ohio AirBnB Cottage near Lakeside Ohio',
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
