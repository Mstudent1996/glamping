import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

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
            background: "transparent",
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
              {navLinks.map((link) => (
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
                    "&:hover": { backgroundColor: "#829B97" },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {/* MOBILE HEADER */}
      {isMobile && (
        <AppBar
          position="absolute"
          sx={{
            background: "transparent",
            boxShadow: "none",
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

          {navLinks.map((link) => (
            <MuiLink
              key={link.path}
              component={Link}
              to={link.path}
              sx={{
                fontFamily: "'Zen Loop', cursive",
                fontSize: "32px",
                color: "white",
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </MuiLink>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
