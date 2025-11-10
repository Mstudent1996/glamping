import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Gitte from "../../assets/gitte.jpg";
import ReviewsList from "../../components/reviewslist/ReviewsList";
import heroImage from "../../assets/image_00.jpg";
import logo from "../../assets/logo.png";

export default function HomePage() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* HERO */}
      <Box
        sx={{
          width: "100%",
          height: "550px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          mb: "-5px",
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={heroImage}
          alt="Ophold"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Color overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(119,141,134,0.55)",
            zIndex: 2,
          }}
        />

        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -100%)",
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
            transform: "translate(-50%, -100%)",
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
            top: "60%",
            left: "50%",
            transform: "translateX(-50%)",
            border: "2px solid white",
            borderRadius: "25px 0",
            color: "white",
            fontSize: "18px",
            px: 4,
            py: 1,
            zIndex: 2,
            "&:hover": {
              backgroundColor: "#829B97",
              borderColor: "transparent",
            },
            fontFamily: "'Zen Loop', cursive",
          }}
        >
          BOOK NU
        </Button>
      </Box>

      {/* INTRO-SEKTION */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#33626C",
          borderTopLeftRadius: { xs: "40px" },
          borderBottomRightRadius: { xs: "40px" },
          position: "relative",
          zIndex: 2,
          pt: { xs: 6, sm: 8, md: 10 },
          pb: { xs: 8, sm: 10, md: 12 },
          mt: { xs: -5, sm: -5, md: -5 }

        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontFamily: "'Zen Loop', cursive",
                  textAlign: { xs: "center", md: "left" },
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                }}
              >
                Kom og prøv
                <br />
                glamping hos Gitte!
              </Typography>

              <Typography
                sx={{
                  color: "white",
                  textAlign: { xs: "center", md: "left" },
                  lineHeight: 1.6,
                  maxWidth: "500px",
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor
                hjertevarme og omsorg møder naturens skønhed og eventyr. Vores
                dedikerede team, anført af Gitte selv, er her for at skabe den
                perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber
                efter at skabe minder og fordybelse, uanset om du besøger os som
                par, familie eller soloeventyrer. Vi tilbyder en bred vifte af
                aktiviteter og arrangementer, der passer til alle aldre og
                interesser. Udforsk naturen, slap af ved bålet, del historier
                med nye venner, eller find indre ro med vores
                wellnessaktiviteter.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 3,
              }}
            >
              <Box
                component="img"
                src={Gitte}
                alt="Gitte"
                sx={{
                  width: 200,
                  height: 200,
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />

              <Button
                component={Link}
                to="/stays"
                variant="outlined"
                sx={{
                  fontFamily: "'Zen Loop', cursive",
                  fontSize: "25px",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "15px 0",
                  backgroundColor: "#829b97",
                  "&:hover": { backgroundColor: "#5a8981ff" },
                  border: "none"
                }}
              >
                Se vores ophold
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* REVIEWS-SEKTION */}
      <Box sx={{ position: "relative", mt: { xs: -5, md: -5 }, zIndex: 5 , pt: "10px"}}>
        <ReviewsList />
      </Box>
    </Box>
  );
}
