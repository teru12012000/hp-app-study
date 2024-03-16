import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "75%",
        margin: "20px auto",
        textAlign: "center",
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
        width: 163,
        height: 277,
    }),
    tableSection: style({
        display: "flex",
        justifyContent: "center",
    }),
    table: style({
        width: 300,
    }),
}

export default styles
