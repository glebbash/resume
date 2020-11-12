import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import NamedIcon from "../components/NamedIcon"
import { Stars, Work, School, Code, Info } from "@material-ui/icons"
import { Grid, Paper } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {},
        group: {
            margin: theme.spacing(1, 2),
            padding: theme.spacing(1),
        },
    }),
)

export default function MainPage() {
    const cls = useStyles()

    return (
        <Grid className={cls.root}>
            <Grid container direction="column">
                <Paper className={cls.group}>
                    <NamedIcon icon={Stars}>Key skills</NamedIcon>
                </Paper>
                <Paper className={cls.group}>
                    <NamedIcon icon={Work}>Work history</NamedIcon>
                </Paper>
                <Paper className={cls.group}>
                    <NamedIcon icon={School}>Education</NamedIcon>
                </Paper>
                <Paper className={cls.group}>
                    <NamedIcon icon={Code}>Projects</NamedIcon>
                </Paper>
                <Paper className={cls.group}>
                    <NamedIcon icon={Info}>Additional info</NamedIcon>
                </Paper>
            </Grid>
        </Grid>
    )
}
