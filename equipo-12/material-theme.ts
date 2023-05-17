import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    header: true;
  }
}


declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    quaternary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    quaternary?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    button2: true;
    button3: true;
    error: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#201F22",
    },
    secondary: {
      main: "#C1FD35",
    },
    tertiary: {
      main: "EEEAEA"
    },
    quaternary: {
      main: "#3A393E",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "24pt",
      fontWeight: "700",
    },
    h2: {
      fontSize: "20pt",
      fontWeight: "700",
    },
    h3: {
      fontSize: "16pt",
      fontWeight: "700",
    },
    h4: {
      fontSize: "14pt",
      fontWeight: "700",
    },
    subtitle1: {
      fontSize: "14pt",
      fontWeight: "500",
    },
    subtitle2: {
      fontSize: "12pt",
      fontWeight: "500",
    },
    button: {
      fontSize: "14pt",
      fontWeight: "700",
      textTransform: "capitalize",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "error" },
          style: {
            fontSize: "16pt",
            fontWeight: "500",
            color: "red",
            fontStyle: "italic",
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            color: "#C1FD35",
            backgroundColor: "#201F22",
            border: "solid 1px #C1FD35",
            padding: "0",
            "&:hover": {
              backgroundColor: "#403e44",
            },
          },
        },
        {
          props: { variant: "primary", size:"large" },
          style: {
            width: "300px",
            height: "50px",
            "@media (min-width:600px)": {
              width: "360px",
              height: "64px",
            },
          }
        },
        {
          props: { variant: "primary", size:"medium" },
          style: {
            width: "140px",
            height: "40px",
          }
        },
        {
          props: { variant: "primary", color: "secondary" },
          style: {
            color: "#201F22",
            backgroundColor: "#C1FD35",
            border: "solid 1px #C1FD35",
            "&:hover": {
              backgroundColor: "#a3d52e",
              borderColor: "#a3d52e",
            },
          }
        },
        {
          props: { variant: "secondary" },
          style: {
            color: "#201F22",
            backgroundColor: "#CECECE",
            border: "solid 1px #CECECE",
            "&:hover": {
              backgroundColor: "#bababa",
              borderColor: "#bababa",
            },
          }
        },
        {
          props: { variant: "secondary", size:"large" },
          style: {
            width: "300px",
            height: "50px",
            "@media (min-width:600px)": {
              width: "360px",
              height: "64px",
            },
          }
        },
        {
          props: { variant: "secondary", size:"medium" },
          style: {
            width: "140px",
            height: "40px",
          }
        },
      ],
    },
  },
});
