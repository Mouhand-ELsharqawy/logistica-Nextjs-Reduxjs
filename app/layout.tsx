'use client';
import './globals.css'
import Footer from '@/component/footer'
import Header from '@/component/header'
import { Inter } from 'next/font/google'
import { Providers } from './redux/provider';
// import Head from 'next/head'
// import $ from "jquery";


// import "./lib/easing/easing.min.js";
// // import "./lib/waypoints/waypoints.min.js";
// // import "./lib/counterup/counterup.min.js";
// // import "./lib/owlcarousel/owl.carousel.min.js";
// import "./js/main.js";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Logistica App',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <Providers>
        {children}
        </Providers>
      <Footer />
 {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./lib/wow/wow.min.js"></script>
    <script src="./lib/easing/easing.min.js"></script>
    <script src="./lib/waypoints/waypoints.min.js"></script>
    <script src="./lib/counterup/counterup.min.js"></script>
    <script src="./lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="./js/main.js"></script> */}
      </body>
    </html>
  )
}
