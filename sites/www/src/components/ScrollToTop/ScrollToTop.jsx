import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Fortæller hvilken path brugeren er på
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation(); // Henter nuværende rute, opdateres når brugeren skifter side

  // Hver gang ruten ændres kører effekten
  useEffect(() => {
    window.scrollTo(0, 0); // Den ruller til top
  }, [pathname]);

  return (
    <AnimatePresence mode="wait"> {/* Wait gør animationen først starter når den forrige er færdig og forhindrer overlap */}
      <motion.div
        key={pathname} // Animationen genstartes ved hver ny side
        initial={{ opacity: 0, y: 20 }} // Starter usynligt
        animate={{ opacity: 1, y: 0 }} // Glider på plads
        exit={{ opacity: 0, y: -20 }} // Elementet glider op og forsvinder når man forlader siden
        transition={{ duration: 0.6, ease: "easeOut" }} // Varer 0.6 sekunder og laver en blød slutning
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
