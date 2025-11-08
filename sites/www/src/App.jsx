import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import HomePage from "./pages/homepage/HomePage";
import Contact from "./pages/contact/Contact";
import Activities from "./pages/activities/Activities";
import StaysPage from "./pages/stays/StaysPage";
import StayDetail from "./pages/staydetail/StayDetail";

export default function App() {
  return (
    <Router>
      <CssBaseline />

      {/* App wrapper */}
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/stays" element={<StaysPage />} />
          <Route path="/stay/:id" element={<StayDetail />} />
        </Routes>

        <Footer />
      </Box>
    </Router>
  );
}
