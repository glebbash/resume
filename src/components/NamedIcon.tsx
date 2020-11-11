import React from "react"
import type { SvgIconComponent } from "@material-ui/icons"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

export type NamedIconProps = {
    icon: SvgIconComponent
    children: string
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: "2rem",
        },
    }),
)

export default function NamedIcon(props: NamedIconProps) {
    const cls = useStyles()
    const Icon = props.icon

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            className={cls.root}
        >
            <Icon />
            <Typography variant="body1">{props.children}</Typography>
        </Grid>
    )
}
