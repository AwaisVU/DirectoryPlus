import { createRoot } from "react-dom/client";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { StrictMode } from "react";
import ContactIndex from "./Components/ContactPages/ContactIndex";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
);

function Homepage() {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <Header></Header>
      <main className="flex-fill">
        <ContactIndex></ContactIndex>
      </main>
      <Footer></Footer>
    </div>
  );
}
