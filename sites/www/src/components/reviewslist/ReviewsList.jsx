import React, { useEffect, useState } from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";

export default function ReviewsList() {
  const theme = useTheme();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3042/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <Container
      sx={{
        textAlign: "center",
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Titel */}
      <Box
        sx={{
          backgroundColor: theme.palette.tertiary.main,
          display: "inline-block",
          px: { xs: 4, md: 10 },
          py: { xs: 2, md: 3 },
          borderTopLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          mb: 6,
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
          gap: 4,
          width: "100%",
          justifyItems: "center",
        }}
      >
        {reviews.map((rev) => (
          <Box
            key={rev._id}
            sx={{
              backgroundColor: theme.palette.quaternary.main,
              color: "white",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "40px",
              p: 3,
              textAlign: "center",
              width: "100%",
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

            <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.5, fontFamily: "'Nanum Gothic', sans-serif" }}>
              {rev.review}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
