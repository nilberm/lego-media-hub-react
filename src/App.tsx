import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MenuOpen from "./components/MenuOpen";

function App() {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <>
      <MenuOpen toggleMenu={toogleMenu} setToggleMenu={setToogleMenu} />
      {toogleMenu ? (
        ""
      ) : (
        <>
          <Header toggleMenu={toogleMenu} setToggleMenu={setToogleMenu} />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
