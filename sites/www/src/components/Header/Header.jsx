import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";
import heroImage from "../../assets/image_00.jpg";
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
    <Box sx={{ width: "100%", position: "relative", pb: isMobile ? 4 : 8 }}>
      {/* HERO */}
      <Box
        sx={{
          width: "100%",
          height: "550px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={heroImage}
          alt="Hero"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        {/* Color overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(119,141,134,0.55)",
            zIndex: 1,
          }}
        />

        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70px",
            zIndex: 2,
          }}
        />

        {/* Title */}
        <Typography
          sx={{
            position: "absolute",
            top: "53%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "'Zen Loop', cursive",
            fontSize: "46px",
            color: "white",
            textAlign: "center",
            lineHeight: 1.05,
            zIndex: 2,
            marginTop: "8px",
          }}
        >
          Gittes <br /> Glamping
        </Typography>

        {/* CTA Button */}
        <Button
          component={Link}
          to="/contact"
          sx={{
            position: "absolute",
            top: "72%",
            left: "50%",
            transform: "translateX(-50%)",
            border: "2px solid white",
            borderRadius: "25px 0",
            color: "white",
            fontSize: "18px",
            px: 4,
            py: 1,
            zIndex: 2,
            "&:hover": { backgroundColor: "#829B97" },
            fontFamily: "'Zen Loop', cursive",
          }}
        >
          BOOK NU
        </Button>

        {/* Mobile burger button */}
        {isMobile && (
          <IconButton
            onClick={() => setMenuOpen(true)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "#829B97",
              color: "white",
              borderRadius: "25px 0",
              zIndex: 3,
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>

      {/* DESKTOP NAV */}
      {!isMobile && (
        <AppBar
          position="absolute"
          sx={{ background: "transparent", boxShadow: "none", top: 0 }}
        >
          <Toolbar sx={{ justifyContent: "flex-end", gap: 3, pr: 3 }}>
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
          </Toolbar>
        </AppBar>
      )}

      {/* MOBILE DRAWER MENU */}
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

          <Typography
            sx={{
              fontFamily: "'Zen Loop', cursive",
              fontSize: "40px",
              color: "white",
              mb: 2,
            }}
          >
            Gittes Glamping
          </Typography>

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
