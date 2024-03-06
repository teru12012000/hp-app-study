import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        textAlign: "center",
    }),
    itemImage: style({
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        width: "75%",
        margin: "20px auto",
    }),
}

export default styles
