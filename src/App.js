import {
  Typography,
  Card,
  CardActions,
  AppBar,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello This is a Photo Abum, i am making this look as long as
              possible so we can see how it looks like the browser
            </Typography>
            <div className={classes.buttons}>
              <Grid
                Container
                spacing={4}
                justifyContent="center"
                direction="row"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <Button variant="contained" color="primary">
                    Photos
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" color="primary">
                    Secondary
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
