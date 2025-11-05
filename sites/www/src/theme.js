import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#33626C",
    },
    secondary: {
      main: "#D3D8D2",
    },
    tertiary: {
      main: "#C5B496",
    },
    quaternary: {
      main: "#829B97",
    },
    background: {
      default: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    fontDisplay: "swap",
    h1: { fontFamily: "'Zen Loop', cursive" },
    h2: { fontFamily: "'Zen Loop', cursive" },
    h3: { fontFamily: "'Zen Loop', cursive" },
    h6: { fontFamily: "'Zen Loop', cursive" },
    button: { fontFamily: "'Zen Loop', cursive" },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiBox: {
      variants: [
        {
          props: { variant: "heroSection" },
          style: {
            width: "100%",
            backgroundColor: "#33626C",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            position: "relative",
            zIndex: 10,
            overflow: "hidden",
            transform: "translateY(-40px)",
            paddingTop: "48px",
            paddingBottom: "64px",

            // Responsive: tablet + desktop
            "@media (min-width:600px)": {
              transform: "translateY(-60px)",
              paddingTop: "64px",
              paddingBottom: "80px",
            },
            "@media (min-width:900px)": {
              transform: "translateY(-100px)",
              paddingTop: "80px",
              paddingBottom: "96px",
            },
          },
        },
      ],
    },
  },
});

export default theme;
