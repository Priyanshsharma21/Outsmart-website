import { useEffect, useRef, useState } from 'react';
import { Preloader } from './components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from "./pages"
import Lenis from "lenis";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const loadContent = async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    };

    loadContent();
  }, []);



  return (
    <>
        <AnimatePresence mode='wait'>
              {isLoading && <Preloader />}
          </AnimatePresence>
          <>
            <Routes>
              <Route index path="/" element={<Home />} />
            </Routes>
          </>
    </>
  );
};

export default App;