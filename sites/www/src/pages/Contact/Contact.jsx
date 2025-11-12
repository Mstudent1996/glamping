import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { ToastContainer, toast, Slide } from "react-toastify"; // Bruges til beskeder ved submit
import "react-toastify/dist/ReactToastify.css";
import contactImage from '../../assets/image_03.jpg';
export default function Contact() {
  // Hvad brugeren indtaster i formularen gemmes
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Ved ændringer i et felt opdateres det i formData
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Forhindrer reload

    // Sikrer at e-mailens format er gyldigt - regex
     if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // Viser rød fejlmeddelse
       toast.error("Indtast en gyldig e-mailadresse", {
         position: "top-center",
         autoClose: 3000,
         theme: "colored",
         transition: Slide,
       });
       return;
     }

     // Viser grøn successbesked
    toast.success("Tak for din besked! Vi vender snart tilbage", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Slide,
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
          src={contactImage}
          alt="Kontakt Gitte"
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
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontFamily: "'Zen Loop', cursive",
              fontWeight: 400,
              textShadow: "0 3px 8px rgba(0,0,0,0.5)",
            }}
          >
            Kontakt Gitte
          </Typography>
        </Box>
      </Box>

      {/* FORMULAR-SEKTION */}
      <Box
        sx={{
          backgroundColor: "#33626C",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          py: 6,
          px: 3,
          mt: "-60px",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          zIndex: 5,
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Zen Loop', cursive",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            mb: 1,
          }}
        >
          Vil du booke et ophold?
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Zen Loop', cursive",
            fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
            mb: 3,
          }}
        >
          Eller har du blot et spørgsmål?
        </Typography>

        <Typography
          sx={{
            maxWidth: "600px",
            mb: 4,
            fontFamily: "'Nanum Gothic', sans-serif",
            lineHeight: 1.6,
          }}
        >
          Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at
          svare på henvendelser indenfor 24 timer, men op til ferier kan der
          være travlt, og svartiden kan derfor være op til 48 timer.
        </Typography>

        {/* FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            width: "100%",
            maxWidth: "400px",
          }}
        >
          {/* NAVN */}
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "'Zen Loop', cursive",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                mb: 0.5,
              }}
            >
              Navn
            </Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="standard"
              fullWidth
              required
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.8)",
                  borderRadius: "20px",
                  px: 2,
                  py: 1,
                  color: "white",
                },
              }}
            />
          </Box>

          {/* EMAIL */}
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "'Zen Loop', cursive",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                mb: 0.5,
              }}
            >
              Email
            </Typography>
            <TextField
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="standard"
              fullWidth
              required
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.8)",
                  borderRadius: "20px",
                  px: 2,
                  py: 1,
                  color: "white",
                },
              }}
            />
          </Box>

          {/* SUBJECT */}
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "'Zen Loop', cursive",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                mb: 0.5,
              }}
            >
              Hvad drejer henvendelsen sig om?
            </Typography>
            <TextField
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.8)",
                  borderRadius: "20px",
                  px: 2,
                  py: 1,
                  color: "white",
                },
              }}
            />
          </Box>

          {/* MESSAGE */}
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "'Zen Loop', cursive",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                mb: 0.5,
              }}
            >
              Besked (Skriv dato'er, hvis det drejer sig om en booking)
            </Typography>
            <TextField
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              variant="standard"
              fullWidth
              required
              slotProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.8)",
                  borderRadius: "20px",
                  px: 2,
                  py: 1,
                  color: "white",
                },
              }}
            />
          </Box>

          {/* SUBMIT BUTTON */}
          <Box
            component="button"
            type="submit"
            sx={{
              backgroundColor: "#829B97",
              border: "none",
              borderRadius: "20px 0",
              color: "white",
              px: 6,
              py: 1.5,
              fontSize: "1rem",
              fontFamily: "'Zen Loop', cursive",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#5f918aff",
                transform: "scale(1.05)",
              },
            }}
          >
            Indsend
          </Box>
        </Box>
      </Box>

      <ToastContainer />
    </Box>
  );
}
