import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { AnimatePresence } from "framer-motion";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import HomePage from "./pages/homepage/HomePage";
import Contact from "./pages/contact/Contact";
import Activities from "./pages/activities/Activities";
import StaysPage from "./pages/stays/StaysPage";
import StayDetail from "./pages/staydetail/StayDetail";

export default function App() {
  return (
    <Router>
      <CssBaseline />
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
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <ScrollToTop>
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
