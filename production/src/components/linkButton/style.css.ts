import { style } from "@vanilla-extract/css"

const styles = {
    button: style({
        width: 150,
        height: 50,
        backgroundColor: "white",
        border: `2px solid black`,
        borderRadius: 10,
        fontSize: 24,
        color: "black",
        ":active": {
            backgroundColor: "silver",
        },
        ":hover": {
            backgroundColor: "silver",
            transition: "0.6s",
        },
    }),
    linkBox: style({
        width: 350,
        display: "flex",
        justifyContent: "space-between",
    }),
    linkItem: style({
        marginBottom: 5,
    }),
}

export default styles
