import { style } from "@vanilla-extract/css"

const styles = {
    button: style({
        width: 150,
        height: 50,
        backgroundColor: "#FFFFFF",
        border: "2px solid #black",
        borderRadius: 10,
        fontSize: 24,
        ":active": {
            backgroundColor: "rgba(0,0,0,0.16)",
        },
    }),
    linkItem: style({
        marginBottom: 5,
    }),
}

export default styles
