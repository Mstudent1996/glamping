import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Link } from 'react-router-dom'

export default function StayDetail() {
  const { id } = useParams();
  const [stay, setStay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3042/stay/${id}`)
      .then((res) => {
        const raw = Array.isArray(res.data)
          ? res.data[0]
          : Array.isArray(res.data?.data)
          ? res.data.data[0]
          : res.data;
        setStay(raw || null);
      })
      .catch((err) => console.error("Fejl ved hentning af ophold:", err))
      .finally(() => setLoading(false));
  }, [id]);

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
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={stay.image || "/default.jpg"}
          alt={stay.title || "Ophold"}
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
            inset: 0,
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontFamily: "'Zen Loop', cursive",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              textShadow: "0 3px 8px rgba(0,0,0,0.5)",
            }}
          >
            {stay.title || "Weekendtur"}
          </Typography>
        </Box>
      </Box>

      {/* INFO-SEKTION */}
      <Box
        sx={{
          backgroundColor: "#33626C",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          sx= {{
            display: "flex",
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
          {stay.subtitle || "Tag væk en weekend, med én du holder af"}
        </Typography>

        <Typography
          sx={{
            maxWidth: "650px",
            fontFamily: "'Nanum Gothic', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.6,
            mb: 4,
          }}
          >
          {stay.description ||
            "Drømmer du om at tilbringe kvalitetstid med din elskede i et idyllisk, naturskønt miljø, langt væk fra hverdagens travlhed? Vores romantiske glampingophold er den perfekte mulighed for jer til at fordybe jer i hinandens selskab og skabe uforglemmelige minder i en luksuriøs campingoplevelse som ingen anden."}
        </Typography>
            </Box>

        {/* Liste med indhold */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column"
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
          Pris: {stay.price || "4200,-"}
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
