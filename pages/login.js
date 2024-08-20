import Head from 'next/head'
import { Inter } from '@next/font/google'
import Card from '/src/card.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
   
      </Head>

      <div>
        

        <Card />
    
      </div>
      
    
    </>
  )
}

