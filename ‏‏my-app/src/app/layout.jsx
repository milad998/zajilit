import { Tajawal } from 'next/font/google'
import  './globals.css'
import Footer from '@/compnante/Footer'
import Navbar from './Navbar'

const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'زاجل للحلول اللوجستية',
  description: 'اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية',
  
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="ar" dir='rtl'>
      <link rel="icon" href="../../public/icon.svg" />
      <meta property="og:image" content="https://zajil1-gckt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage1.c162e9a7.png&w=750&q=75" />
      <body className={tajawal.className}>
      <Navbar/>
      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          {children}
      {/* </NumTrack.Provider> */}
        
        <Footer />
        
        
        </body>
    </html>
  )
}
