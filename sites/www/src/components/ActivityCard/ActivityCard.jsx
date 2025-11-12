import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material"; // Collapse bruges til smooth animation ved udvidelse
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function ActivityCard({ title, image, time, description }) {
  const [expanded, setExpanded] = useState(false); // Vurderer om beskrivelsen er udvidet eller ej

  return (
    /* Yderste box */
    <Box
      sx={{
        position: "relative",
        borderRadius: "20px",
        overflow: "visible",
        mb: 8,
        width: "100%",
        maxWidth: 360,
        mx: "auto",
        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        backgroundColor: "#CED3CD",
      }}
    >

      {/* Billede */}
      <Box sx={{ position: "relative" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            display: "block",
            borderRadius: "20px",
          }}
        />

        {/* Titel */}
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#CDBCA4",
            borderTopLeftRadius: "40px",
            borderBottomRightRadius: "40px",
            px: 5,
            py: 1,
            zIndex: 2,
            width: "80%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Zen Loop, sans-serif",
              fontWeight: "400",
              fontSize: "1.8rem",
              color: "white",
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Info */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%) translateY(30%)",
            width: "90%",
            backgroundColor: "#3C6B6A",
            color: "white",
            p: 3,
            borderTopLeftRadius: "40px",
            borderBottomRightRadius: "40px",
            boxShadow: "0 6px 10px rgba(0,0,0,0.25)",
          }}
        >
          {/* Tid */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography sx={{ fontSize: "0.9rem" }}>Alle dage</Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>{time}</Typography>
            </Box>
          </Box>

          {/* Læs mere-knap */}
          <Box
            onClick={() => setExpanded(!expanded)}
            sx={{
              mt: 2,
              border: "2px solid white",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "40px",
              textAlign: "center",
              py: 0.8,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              {expanded ? "Læs mindre" : "Læs mere"}{" "}
              {expanded ? (
                <ExpandLessIcon sx={{ fontSize: "1.2rem", mt: "2px" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "1.2rem", mt: "2px" }} />
              )}
            </Typography>
          </Box>

          {/* Beskrivelse */}
          <Collapse in={expanded}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                lineHeight: 1.5,
                mt: 2,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {description}
            </Typography>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
}
