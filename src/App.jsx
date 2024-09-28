import { Outlet } from "react-router-dom";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
