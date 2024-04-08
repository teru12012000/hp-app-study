import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        textAlign: "center",
    }),
    titleTextBox: style({
        color: "white",
        fontSize: 18,
    }),
    header: style({
        display: "flex",
        justifyContent: "center",
    }),
    backButton: style({
        marginTop: 10,
        marginRight: 10,
    }),

    button: style({
        width: 150,
        height: 50,
        backgroundColor: "white",
        border: `2px solid black`,
        borderRadius: 10,
        fontSize: 24,
        color: "black",
        cursor: "pointer",
    }),
    itemContainer: style({
        display: "flex",
        justifyContent: "center",
    }),
    itemImage: style({
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        rowGap: 20,
        width: "75%",
        margin: "20px auto",
        "@media": {
            "screen and (max-width:767px)": {
                gridTemplateColumns: "repeat(2,1fr)",
            },
            "screen and (max-width:440px)": {
                display: "block",
            },
        },
    }),
}

export default styles
