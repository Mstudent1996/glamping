import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";
import StaysImage from "../../assets/Image_01.jpg";
import { Link } from "react-router-dom";

export default function StaysPage() {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3042/stays")
      .then((res) => {
        setStays(res.data.data);
      })
      .catch((err) => console.error("Fejl ved hentning af ophold:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ overflowX: "hidden", overflowY: "hidden" }}>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          zIndex: 1,
        }}
      >
        {/* Baggrundsbillede */}
        <Box
          component="img"
          src={StaysImage}
          alt="Vores ophold"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(65%) contrast(105%)",
          }}
        />

        {/* Tekst ovenpå */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontFamily: "'Zen Loop', cursive",
              fontSize: { xs: "3.5rem", sm: "5rem", md: "7rem" },
              textAlign: "center",
              textShadow: "0 3px 12px rgba(0,0,0,0.5)",
            }}
          >
            Vores ophold
          </Typography>
        </Box>
      </Box>

      {/* INTRO */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          backgroundColor: "#33626C",
          color: "white",
          textAlign: "center",
          px: { xs: 3, sm: 6, md: 10 },
          py: { xs: 6, sm: 8 },
          borderTopLeftRadius: { xs: "40px", md: "80px" },
          borderBottomRightRadius: { xs: "40px", md: "80px" },
          mt: { xs: -12, sm: -14 }, // 🔧 Trækker intro op bag heroen
          zIndex: 2,
          boxShadow: "0 -10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Zen Loop', cursive",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            mb: 3,
          }}
        >
          Vi har ophold til enhver smag
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.6,
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}
        >
          Vores glampingophold er skabt til at tilbyde en kombination af eventyr
          og afslapning. Det er den ideelle flugt fra byens støj og stress, og
          det perfekte sted at genoplade batterierne i en naturskøn indstilling.
          <br />
          <br />
          Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen
          og nyde luksus i det fri. Vi ser frem til at byde dig velkommen til en
          oplevelse fyldt med komfort, eventyr og skønhed.
        </Typography>
      </Box>

      {/* LISTE MED OPHOLD */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          backgroundColor: "#D4D9D3",
          py: { xs: 6, sm: 8 },
          mt: { xs: -4, sm: -6 },
          pb: 0, // 🔧 ingen ekstra afstand i bunden
          overflow: "hidden", // 🔧 fjern eventuel overscroll
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 4,
            justifyItems: "center",
            alignItems: "start",
            px: { xs: 2, sm: 4 },
            mt: { xs: 4, sm: 6 },
          }}
        >
          {Array.isArray(stays) &&
            stays.map((stay) => (
              <Box
                key={stay.id}
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 600,
                  mx: "auto",
                  mb: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#D4D9D3",
                  pb: 6,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#D1BFA5",
                    color: "black",
                    borderTopLeftRadius: "40px",
                    borderBottomRightRadius: "40px",
                    p: { xs: 2.5, sm: 3 },
                    width: "95%",
                    textAlign: "center",
                    zIndex: 2,
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Zen Loop', cursive",
                      fontSize: { xs: "1rem", sm: "1.9rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    {stay.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Zen Loop', cursive",
                      fontSize: { xs: "1.8rem", sm: "1.5rem" },
                    }}
                  >
                    Antal personer: {stay.numberOfPersons}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Zen Loop', cursive",
                      fontSize: { xs: "1.8rem", sm: "1.5rem" },
                    }}
                  >
                    Fra {stay.price},-
                  </Typography>
                </Box>

                <Box
                  component="img"
                  src={stay.image}
                  alt={stay.title}
                  sx={{
                    width: "100%",
                    height: { xs: 380, sm: 420 },
                    objectFit: "cover",
                    borderRadius: "0 0 40px 40px",
                    mt: -4,
                  }}
                />

                <Link
                  to={`/stay/${stay._id}`}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#6C8A8D",
                      color: "white",
                      borderTopLeftRadius: "40px",
                      borderBottomRightRadius: "40px",
                      px: 6,
                      py: 1.5,
                      textAlign: "center",
                      width: "60%",
                      mt: -3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Zen Loop', cursive",
                        fontSize: { xs: "1.6rem", sm: "1.5rem" },
                      }}
                    >
                      Læs mere
                    </Typography>
                  </Box>
                </Link>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

