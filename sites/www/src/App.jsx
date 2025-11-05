import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Homepage from "./pages/homepage/HomePage";
import Contact from "./pages/contact/Contact";
import Activities from "./pages/activities/Activities";
import ServicesPage from "./pages/servicespage/ServicesPage";

export default function App() {
  return (
    <Router>
      <CssBaseline />

      {/* App wrapper */}
      <Box sx={{ width: "100%", overflowX: "hidden" }}>
        <Header />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/contact"
            element={
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Contact />
              </Container>
            }
          />
          <Route
            path="/activities"
            element={
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Activities />
              </Container>
            }
          />
          <Route
            path="/servicespage"
            element={
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <ServicesPage />
              </Container>
            }
          />
        </Routes>

        <Footer />
      </Box>
    </Router>
  );
}
