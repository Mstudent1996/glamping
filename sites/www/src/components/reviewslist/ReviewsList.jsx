import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3042/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 10 }, // mere luft top/bund
        px: { xs: 2, md: 6 }, // tilføjer lidt vandret padding
        backgroundColor: "#CED3CD",
        width: "100vw",
      }}
    >
      {/* Titel */}
      <Box
        sx={{
          backgroundColor: "#C5B496",
          display: "inline-block",
          px: { xs: 4, md: 10 },
          py: { xs: 2, md: 3 },
          borderTopLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          mb: 8, // lidt mere luft under titlen
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Zen Loop', cursive",
            fontWeight: 200,
            color: "white",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Vores gæster
          <br />
          udtaler
        </Typography>
      </Box>

      {/* Grid på desktop, kolonne på mobil */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 5, // lidt mere afstand mellem kortene
          width: "100%",
          justifyItems: "center",
        }}
      >
        {reviews.map((rev) => (
          <Box
            key={rev._id}
            sx={{
              backgroundColor: "#829B97",
              color: "white",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "40px",
              p: { xs: 3, md: 4 }, // lidt større padding i kortene
              textAlign: "center",
              width: { xs: "90%", md: "80%" }, // mere luft i siderne
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontFamily: "'Zen Loop', cursive", mb: 1 }}
            >
              {rev.name}, {rev.age} år
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "'Zen Loop', cursive", mb: 2 }}
            >
              Har været på {rev.stay?.toLowerCase()}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.5,
                fontFamily: "'Nanum Gothic', sans-serif",
              }}
            >
              {rev.review}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
