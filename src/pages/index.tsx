import { Inter } from 'next/font/google'
import NavBarComponent from '@/components/global/NavBarComponent'
import HeaderComponent from '@/components/HeaderComponent'
import ContactFormComponent from '@/components/global/ContactFormComponent'
import CategoryComponent from '@/components/global/CategoryComponent'
import FooterComponent from '@/components/global/FooterComponent'
import ArrowTopComponent from '@/components/global/ArrowTopComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '@/types/Product'
import CardListComponent from '@/components/CardListComponent'
import { FavoritesProvider } from '@/components/contexts/FavoritesContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err))
  }, [])

  return <div className="text-dark-2 bg-light-1 font-raleway">

      <div className="bg-[url('/wall.jpg')] bg-full bg-cover md:bg-contain min-h-[400px] md:h-[68vh]">

        <NavBarComponent />
        <HeaderComponent />

      </div>

      <CategoryComponent />

      {products !== undefined && products.length ? <div className="shadow-md">

        <h2 className="font-semibold text-3xl md:text-4xl p-10" >Today's deals</h2>

        <CardListComponent products={products?.filter(product => product.discountPercentage > 15.8)} />

      </div> : <p className="text-3xl text-center font-bold p-8">We're sorry, there are no special discounts at the moment. We invite you to try again tomorrow</p>

      }


      <ContactFormComponent />

      <FooterComponent />

      <ArrowTopComponent />

    </div>
}
