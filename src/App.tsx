import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import NamedIcon from "./components/NamedIcon"
import { Stars, Work, School, Code, Info } from "@material-ui/icons"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(() =>
    createStyles({
        root: {},
    }),
)

export default function App() {
    const cls = useStyles()

    return (
        <Grid className={cls.root}>
            <CssBaseline />
            {/* Roboto font */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <Grid container direction="column">
                <NamedIcon icon={Stars}>Key skills</NamedIcon>
                <NamedIcon icon={Work}>Work history</NamedIcon>
                <NamedIcon icon={School}>Education</NamedIcon>
                <NamedIcon icon={Code}>Projects</NamedIcon>
                <NamedIcon icon={Info}>Additional info</NamedIcon>
            </Grid>
        </Grid>
    )
}
