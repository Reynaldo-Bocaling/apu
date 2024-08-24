import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tokenomics from "./pages/Tokenomics";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-[#ffbcbc] dh-screen">
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Hero />
          <About />
          <Tokenomics />
          <Contact />
        </>
      )}
    </main>
  );
};

export default App;
