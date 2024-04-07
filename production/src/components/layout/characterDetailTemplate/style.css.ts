import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "95%",
        margin: "20px auto",
        textAlign: "center",
    }),
    button: style({
        display: "flex",
        justifyContent: "flex-start",
    }),
    title: style({
        color: "white",
    }),
    imageSection: style({
        width: "100%",
        display: "flex",
        justifyContent: "center",
    }),
    imageBox: style({
        width: 180,
        height: 255,
        border: "2px solid white",
    }),
    tableSection: style({
        display: "flex",
        justifyContent: "center",
    }),
    table: style({
        marginTop: 30,
        width: 300,
        color: "white",
    }),
}

export default styles
