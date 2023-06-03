import Header from "../components/Header"
import Layout from "../components/Layout"
import LoginModal from "../components/models/LoginModel"
import RegisterModal from "../components/models/RegisterModal"
import { AppProps } from "next/app"
import "../styles/globals.css"
import { SessionProvider } from "next-auth/react"


export default function Home({ Component, pageProps}: AppProps) {
  return ( 
    
     <SessionProvider>
    <Layout>
       {/* <Model actionLabel="Submit" isOpen title="Test Model"/> */}
       <RegisterModal/>
       <LoginModal/>
    
    <Header showBackArrow label="Home" />
    
    </Layout>
     </SessionProvider>

  );
}
