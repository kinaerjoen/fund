import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
	label: {
		fontSize: "16px",
		marginLeft: "11px",
	},
	control: {
		width: "20px",
		height: "20px",
		border: "1px solid #cdcdcd",
		color: "#bf3132",
	},
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });

export const theme = extendTheme({
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode("#fff")(props),
			},
		}),
	},
	colors: {
		brand: {
			black: "#151f21",
			blue: "#4164e3",
			cadet: "#8998a8",
			dark: "#243156",
			gray: "#2D3748",
			green: "#36c537",
			light: "#e9ebee",
			pure: "#fafafb",
			slate: "#77889a",
			white: "#e3e4e7",
			yellow: "#ed9b13",
			red: "#ff0000",
		},
	},
	components: {
		Text: {
			variants: {
				default: {
					overflow: "hidden",
					textOverflow: "hidden",
				},
			},
			defaultProps: {
				variant: "default",
			},
		},
		Heading: {
			variants: {
				default: {
					overflow: "hidden",
					textOverflow: "hidden",
				},
			},
			defaultProps: {
				variant: "default",
			},
		},
		Checkbox: checkboxTheme,
	},
});
