import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "black",
    }),
    linkBox: style({
        display: "flex",
        justifyContent: "center",
    }),
    title: style({
        color: "white",
        fontSize: 36,
    }),
}

export default styles
