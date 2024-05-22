import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MenuOpen from "./components/MenuOpen";
import { ControlMenuContext } from "./context/toggleMenuContext";

function App() {
  const { isMenuOpen } = useContext(ControlMenuContext);

  return (
    <>
      <MenuOpen />
      {isMenuOpen ? (
        ""
      ) : (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
