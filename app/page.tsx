import Header from "./components/Header"
import Layout from "./components/Layout"
import Model from "./components/Model"
import LoginModal from "./components/models/LoginModel"


export default function Homee() {
  return ( 
   
    <Layout>
       {/* <Model actionLabel="Submit" isOpen title="Test Model"/> */}
       <LoginModal/>
    <>
    <Header showBackArrow label="Home" />
    </>
    </Layout>
  )
}
