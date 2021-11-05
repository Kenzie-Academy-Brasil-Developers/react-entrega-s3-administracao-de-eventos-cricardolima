import {
  AppBar,
  Badge,
  Link,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import { useGathering } from "../../providers/gathering";
import { useProm } from "../../providers/prom";
import { useWedding } from "../../providers/wedding";

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: "space-between",
  },

  link: {
    cursor: "pointer",
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const { promList } = useProm();
  const { gatheringList } = useGathering();
  const { weddingList } = useWedding();

  const goTo = (path) => {
    return history.push(path);
  };
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Link className={classes.link} onClick={() => goTo("/")}>
          <HomeIcon sx={{ fontSize: 40 }} />
        </Link>
        <Stack direction="row" spacing={2}>
          <Link className={classes.link} underline="none">
            <Badge badgeContent={promList.length} color="primary">
              <Typography variant="h6" onClick={() => goTo("/prom")}>
                Formatura
              </Typography>
            </Badge>
          </Link>
          <Link className={classes.link} underline="none">
            <Badge badgeContent={weddingList.length} color="primary">
              <Typography variant="h6" onClick={() => goTo("/wedding")}>
                Casamento
              </Typography>
            </Badge>
          </Link>
          <Link
            className={classes.link}
            underline="none"
            onClick={() => goTo("/gathering")}
          >
            <Badge badgeContent={gatheringList.length} color="primary">
              <Typography variant="h6">Confraternização</Typography>
            </Badge>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
