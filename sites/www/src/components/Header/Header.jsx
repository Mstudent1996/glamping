import { useState } from "react"; // Styrer om mobilmenuen er åben
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material"; // useMediaQuery bruges til responsitivitet
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Holder styr på om mobilmenuen er åben
  const isMobile = useMediaQuery("(max-width: 768px)"); // Bliver true når skærmen er 768px bred eller mindre
  const location = useLocation(); // Bruges til at vide hvilken side man er på

  // Array med navigationselementer
  const navLinks = [
    { label: "Forside", path: "/" },
    { label: "Ophold", path: "/stays" },
    { label: "Kontakt", path: "/contact" },
    { label: "Aktiviteter", path: "/activities" },
  ];

  return (
    <Box sx={{ width: "100%", position: "absolute", top: 0, zIndex: 10 }}>
      {/* DESKTOP NAV */}
      {!isMobile && (
        <AppBar
          position="absolute"
          sx={{
            top: 0,
            zIndex: 1,
            backgroundColor: "#33626C",
            padding: "10px",
            position: "fixed",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Logo}
                alt="Logo"
                style={{ height: "55px", cursor: "pointer" }}
              />
            </Link>

            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <MuiLink
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      fontFamily: "'Zen Loop', cursive",
                      fontSize: "25px",
                      color: "white",
                      textDecoration: "none",
                      padding: "8px 12px",
                      borderRadius: "15px 0",
                      backgroundColor: isActive ? "#829B97" : "transparent",
                      fontWeight: isActive ? "bold" : "normal",
                      "&:hover": { backgroundColor: "#829B97" },
                      transition: "0.3s",
                    }}
                  >
                    {link.label}
                  </MuiLink>
                );
              })}
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {/* MOBILE HEADER */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#33626C",
            padding: "10px",
            position: "fixed",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            top: 0,
            zIndex: 10,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", px: 2, pt: 1 }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Logo}
                alt="Logo"
                style={{ height: "45px", cursor: "pointer" }}
              />
            </Link>

            <IconButton
              onClick={() => setMenuOpen(true)}
              sx={{
                background: "#829B97",
                color: "white",
                borderRadius: "25px 0",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* DRAWER MENU */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(119,141,134,0.95)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            gap: 2,
          }}
        >
          <IconButton
            onClick={() => setMenuOpen(false)}
            sx={{ position: "absolute", top: 20, right: 20, color: "white" }}
          >
            <CloseIcon sx={{ fontSize: 34 }} />
          </IconButton>

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path; // Tjekker om location og link path er den samme
            return (
              <MuiLink
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  fontFamily: "'Zen Loop', cursive",
                  fontSize: "32px",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive ? "2px solid white" : "none",
                  paddingBottom: "4px",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </MuiLink>
            );
          })}
        </Box>
      </Drawer>
    </Box>
  );
}
