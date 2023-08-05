import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HusSpinnerProvider } from "./components/ui/spinner/HusSpinnerContext";

const Root = () => {
  return (
    <>
      <HusSpinnerProvider>
        <Header />
        {/* //Children of Root element will be rendered here */}
        <Outlet />
        <Footer />
      </HusSpinnerProvider>
    </>
  );
};

export default Root;
