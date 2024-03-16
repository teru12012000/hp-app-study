import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        textAlign: "center",
    }),
    title: style({
        color: "white",
        fontSize: 24,
    }),
    button: style({
        width: 150,
        height: 50,
        backgroundColor: "white",
        border: `2px solid black`,
        borderRadius: 10,
        fontSize: 24,
        ":active": {
            backgroundColor: "silver",
        },
        ":hover": {
            backgroundColor: "silver",
            transition: "0.6s",
        },
    }),
    itemImage: style({
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        rowGap: 20,
        width: "75%",
        margin: "20px auto",
    }),
}

export default styles
