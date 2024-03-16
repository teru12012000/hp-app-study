import { createTheme } from "@vanilla-extract/css"

export const [themeClass, vars] = createTheme({
    color: {
        black: "#000000",
        white: "red",
        trBlack: "rgba(0,0,0,0.16)",
    },
})
