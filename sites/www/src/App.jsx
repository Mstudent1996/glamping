import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"; // Bruges til at navigere uden reload
import { Box, CssBaseline } from "@mui/material"; // Material UI til layout
import { AnimatePresence } from "framer-motion"; // Bruges til bløde animationer ved sideskift

// Components hentes
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // Component der ruller op til toppen ved sideskift

// Siderne importeres
import HomePage from "./pages/homepage/HomePage";
import Contact from "./pages/contact/Contact";
import Activities from "./pages/activities/Activities";
import StaysPage from "./pages/stays/StaysPage";
import StayDetail from "./pages/staydetail/StayDetail";

export default function App() {
  return (
    <Router>
      <CssBaseline /> {/* Nulstiller browserens layout for ensartet styling */}
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Box>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation(); // Giver information om den aktuelle url
  return (
    // Sørger for pathname ændrer sig til den relevante side f.eks. /contact
    // Laver en overgangsanimation
    <AnimatePresence mode="wait">
      {/* En ny side registreres */}
      <Routes location={location} key={location.pathname}>
        {/* Alle sidernes route */}
        <Route
          path="/"
          element={
            <ScrollToTop> {/* Sørger for der scrolles op til toppen */}
              <HomePage />
            </ScrollToTop>
          }
        />
        <Route
          path="/activities"
          element={
            <ScrollToTop>
              <Activities />
            </ScrollToTop>
          }
        />
        <Route
          path="/stays"
          element={
            <ScrollToTop>
              <StaysPage />
            </ScrollToTop>
          }
        />
        {/* Skaber en dynamisk side baseret på id til hvert stay */}
        <Route
          path="/stay/:id"
          element={
            <ScrollToTop>
              <StayDetail />
            </ScrollToTop>
          }
        />
        <Route
          path="/contact"
          element={
            <ScrollToTop>
              <Contact />
            </ScrollToTop>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
