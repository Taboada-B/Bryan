import { Outlet } from "react-router-dom";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./app.css"; 

function App() {
  return (
    <>
      <Header />
      <main className="body" >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
