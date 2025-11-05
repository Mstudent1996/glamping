import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Gitte from '../../assets/gitte.jpg';
import ReviewsList from "../../components/reviewslist/ReviewsList";

export default function IntroSection() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#33626C",
          borderTopLeftRadius: { xs: "40px" },
          borderBottomRightRadius: { xs: "40px" },
          position: "relative",
          zIndex: 10,

          transform: {
            xs: "translateY(-70px)",
            sm: "translateY(-100px)",
            md: "translateY(-100px)",
            lg: "translateY(-120px)",
          },

          pt: { xs: 6, sm: 8, md: 10 },
          pb: { xs: 8, sm: 10, md: 12 },
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
                  border: "2px solid white",
                  "&:hover": { backgroundColor: "#829B97" },
                }}
              >
                Se vores ophold
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ position: "relative", mt: { xs: -8, md: -18 }, zIndex: 5 }}>
        <ReviewsList />
      </Box>
    </Box>
  );
}
