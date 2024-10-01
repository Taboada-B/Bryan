import { Outlet } from "react-router-dom";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./app.css"; 

function App() {
  return (
    <>
    <div className="font ">
      <Header  />
      <main className="body fullSize " >
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
