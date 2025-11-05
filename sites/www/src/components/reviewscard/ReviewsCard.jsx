import { Box, Typography, useTheme } from "@mui/material";

export default function ReviewsCard({ review }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        p: 3,
        borderRadius: "30px 0",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Zen Loop', cursive",
          fontSize: "26px",
          mb: 1,
        }}
      >
        {review.name}, {review.age} år
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Zen Loop', cursive",
          fontSize: "22px",
          mb: 2,
        }}
      >
        Har været på {review.type}
      </Typography>

      <Typography sx={{ fontSize: "14px", lineHeight: 1.5 }}>
        {review.text}
      </Typography>
    </Box>
  );
}
