import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

const Root = () => {
  return (
    <>
    <Header/>
    {/* //Children of Root element will be rendered here */}
    <Outlet/>   
    <Footer/>
    </>
  )
}

export default Root