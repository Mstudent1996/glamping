import { Box, Grid, Typography, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2A4F57",
        py: 4,
        px: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
        textAlign="center"
      >
        {/* SOCIAL ICONS */}
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
            }}
          >
            <IconButton
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              sx={{ color: "white", fontSize: "60px" }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.instagram.com"
              target="_blank"
              sx={{ color: "white", fontSize: "60px" }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Company Logo"
              sx={{
                width: 50,
                height: "auto",
                mb: 1,
              }}
            />
            <Typography
              sx={{
                color: "white",
                fontFamily: "'Zen Loop', cursive",
                fontSize: "22px",
              }}
            >
              Gittes Glamping
            </Typography>
          </Box>
        </Grid>

        {/* DESKTOP LOGO */}
        <Grid
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Company Logo"
              sx={{ width: 70, height: "auto", mb: 1 }}
            />
            <Typography
              sx={{
                color: "white",
                fontFamily: "'Zen Loop', cursive",
                fontSize: "26px",
              }}
            >
              Gittes Glamping
            </Typography>
          </Box>
        </Grid>

        {/* RIGHT SECTION (desktop only for now) */}
        <Grid
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            flexDirection: "column",
            gap: 1,
            color: "white",
            fontSize: "14px",
          }}
        >
          <Typography sx={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
            Gittes Glamping
          </Typography>
          <Typography sx={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
            info@gittesglamping.dk
          </Typography>
          <Typography sx={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
            +45 12 34 56 78
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
