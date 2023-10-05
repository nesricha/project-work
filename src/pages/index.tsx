import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../components/styles/Styles.module.css'
import NavBarComponent from '@/components/global/NavBarComponent'
import HeaderComponent from '@/components/HeaderComponent'
import ContactFormComponent from '@/components/global/ContactFormComponent'
import ProductListComponent from '@/components/ProductListComponent'
import CategoryComponent from '@/components/global/CategoryComponent'
import FooterComponent from '@/components/global/FooterComponent'
// import styles from 'tailwindcss/tailwind.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={`${styles.mainContainer}`}>

    <div className={`${styles.homeHead}`}>

    <NavBarComponent />
    <HeaderComponent />

      </div>
    
    <CategoryComponent />

    <ProductListComponent />
    <ContactFormComponent />

    <FooterComponent />

    </div>
  )
}
