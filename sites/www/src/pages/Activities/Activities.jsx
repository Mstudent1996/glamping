import { Box, Typography } from "@mui/material";
import ActivityList from "../../components/activitylist/ActivityList";
import ActivityImage from "../../assets/image_04.jpg";

export default function Activities() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "80vh", md: "100vh" },
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <Box
          component="img"
          src={ActivityImage}
          alt="Aktiviteter"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        />

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
            variant="h3"
            sx={{
              fontFamily: "'Zen Loop', cursive",
              color: "white",
              fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Aktiviteter
          </Typography>
        </Box>
      </Box>

      {/* Intro */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          mt: { xs: "-60px", md: "-80px" },
          backgroundColor: "#466B6A",
          color: "white",
          borderTopLeftRadius: { xs: "30px", md: "50px" },
          borderBottomRightRadius: { xs: "30px", md: "50px" },
          px: { xs: 3, md: 8 },
          py: { xs: 5, md: 8 },
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Zen Loop', cursive",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            mb: 2,
          }}
        >
          Ingen skal kede sig hos Gitte
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Nanum Gothic', sans-serif",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.9)",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            maxWidth: 900,
            mx: "auto",
          }}
        >
          Glamping er mere end blot en indkvartering – det er en mulighed for at
          fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om
          du foretrækker en eventyrlig kanotur, en oplysende naturvandring,
          hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning
          eller morgenyoga, der giver dig indre ro og balance i naturens skød –
          vil vi hos Gittes Glamping imødekomme dine ønsker.
        </Typography>
      </Box>

      {/* Activities Sektion */}
      <Box
        sx={{
          backgroundColor: "#CED3CD",
          pt: 10,
          mt: { xs: "-30px", md: "-70px" }, // ⬅️ trækker sektionen lidt op bag radius
          pb: 6,
          zIndex: 1,
          position: "relative",
        }}
      >
        <ActivityList />
      </Box>
    </Box>
  );
}
