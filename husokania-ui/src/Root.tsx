import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HusSpinnerProvider } from "./components/UI/spinner/HusSpinnerContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <>
      <HusSpinnerProvider>
        <Header></Header>
        {/* Children of Root element will be rendered here */}
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer />
      </HusSpinnerProvider>
    </>
  );
};

export default Root;
