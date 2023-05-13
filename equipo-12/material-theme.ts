import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		primary: true;
		secondary: true;
		tertiary: true;
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
			main: "#C1FD35"
		},
		background: {
			default: "#3A393E",
			paper: "#EEEAEA"
		}
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
			width: "300px",
			height: "50px",
			textTransform: "capitalize",
			"@media (min-width:600px)": {
				width: "360px",
				height: "64px",
			}
		},
	},
	components: {
		MuiTypography: {
			variants: [
				{
					props: { variant: "button2" },
					style: {
						fontSize: "16pt",
						fontWeight: "700",

					}
				},
				{
					props: { variant: "button3" },
					style: {
						fontSize: "16pt",
						fontWeight: "600",
						textDecoration: "underline",
						fontFamily: "Open Sans"
					}
				},
				{
					props: { variant: "error" },
					style: {
						fontSize: "16pt",
						fontWeight: "500",
						color: "red",
						fontStyle: "italic"
					}
				}
			]
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
					}
				},
				{
					props: { variant: "secondary" },
					style: {
						color: "#201F22",
						backgroundColor: "#C1FD35",
						border: "solid 1px #C1FD35",
						"&:hover": {
							backgroundColor: "#a3d52e",
							borderColor: "#a3d52e"
						},
					}
				},
				{
					props: { variant: "tertiary" },
					style: {
						color: "#201F22",
						backgroundColor: "#CECECE",
						border: "solid 1px #CECECE",
						"&:hover": {
							backgroundColor: "#bababa",
							borderColor: "#bababa"
						},
					}
				},
			]
		},

	}
});

