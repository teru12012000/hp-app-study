import { style } from "@vanilla-extract/css"

const styles = {
    button: style({
        backgroundColor: "transparent",
        border: "none",
        ":hover": {
            opacity: 0.6,
            transition: "0.6s",
        },
    }),
}

export default styles
