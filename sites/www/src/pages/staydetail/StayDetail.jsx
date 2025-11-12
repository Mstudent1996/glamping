import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Læser id fra url'en
import axios from "axios"; // Axios kan være god ved mange API-kald eller brug af tokens, error handling og kortere kode
import { Box, Typography, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function StayDetail() {
  const { id } = useParams(); // henter id fra url i App
  console.log("useParams id:", id);

  const [stay, setStay] = useState(null); // Data for det valgte ophold
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Henter data for det valgte ophold
    if (!id) return;

    axios
      .get(`http://localhost:3042/stay/${id}`) // Henter data fra id
      .then((res) => {
        console.log("API respons:", res.data);

        // Nogle gange returnerer backend et objekt direkte,
        // andre gange returneres { data: [ {...} ] } eller { data: {...} }
        let data = null;

        if (Array.isArray(res.data?.data)) {
          data = res.data.data[0]; // første element, hvis der kommer et array
        } else if (typeof res.data?.data === "object") {
          data = res.data.data; // direkte objekt
        } else if (Array.isArray(res.data)) {
          data = res.data[0]; // ren array
        } else {
          data = res.data; // direkte objekt
        }

        setStay(data || null);
      })
      .catch((err) => console.error("Fejl ved hentning af ophold:", err))
      .finally(() => setLoading(false));
  }, [id]);

  // Vis loading mens data hentes
  if (loading)
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  // Fejlbesked hvis opholdet ikke findes
  if (!stay)
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>Opholdet blev ikke fundet</Box>
    );

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* HERO-SEKTION */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={stay.image}
          alt={stay.title}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // ⬅️ centrér vertikalt på billedet
            alignItems: "center",
            textAlign: "center",
            zIndex: 3,
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontFamily: "'Zen Loop', cursive",
              fontWeight: 400,
              fontSize: "clamp(2rem, 6vw, 4rem)",
              textShadow: "0 4px 10px rgba(0,0,0,0.6)",
              letterSpacing: "1px",
            }}
          >
            {stay.title}
          </Typography>
        </Box>
      </Box>

      {/* INFO-SEKTION */}
      <Box
        sx={{
          backgroundColor: "#33626C",
          color: "white",
          textAlign: "center",
          py: 6,
          px: 3,
          mt: "-60px",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          zIndex: 5,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {/* Titel & beskrivelse */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Zen Loop', cursive",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                mb: 2,
              }}
            >
              {`Tag væk en weekend, med én du holder af`}
            </Typography>

            <Typography
              sx={{
                maxWidth: "650px",
                fontFamily: "'Nanum Gothic', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.6,
                mb: 4,
                textAlign: "center",
                mx: "auto",
              }}
            >
              {stay.description}
            </Typography>
          </Box>

          {/* Liste med indhold */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                fontFamily: "'Nanum Gothic', sans-serif",
                mb: 4,
              }}
            >
              <Typography>Morgenmad</Typography>
              <Typography>Prosecco</Typography>
              <Typography>Afslapningsområde</Typography>
              <Typography>Adgang til spa</Typography>
              <Typography>Overnatning i luksustelt</Typography>
            </Box>

            {/* Pris */}
            <Typography
              sx={{
                fontFamily: "'Zen Loop', cursive'",
                fontSize: "1.2rem",
                mb: 3,
              }}
            >
              Pris: {stay.price}
            </Typography>

            {/* Book knap */}
            <Box
              component={Link}
              to="/contact"
              sx={{
                backgroundColor: "rgba(255,255,255,0.3)",
                border: "none",
                borderRadius: "20px 0",
                color: "white",
                px: 5,
                py: 1.5,
                mt: 1.5,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "'Zen Loop', cursive",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.5)",
                  transform: "scale(1.05)",
                },
              }}
            >
              Book nu
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
