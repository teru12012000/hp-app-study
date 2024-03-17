import { keyframes, style } from "@vanilla-extract/css"

const spin = keyframes({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
})

const styles = {
    container: style({
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),
    spinBorder: style({
        width: 150,
        height: 150,
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background:
            "linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%)",
        animation: `${spin} .8s linear 0s infinite`,
    }),
    spin: style({
        width: "100%",
        height: "100%",
        backgroundColor: "#1d2630",
        borderRadius: "50%",
    }),
}

export default styles
