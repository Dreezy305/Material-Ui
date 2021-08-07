import {
  Typography,
  Card,
  CardActions,
  AppBar,
  CardContent,
  CardMedia,
  CssBaseline,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
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
                spacing={2}
                justifyContent="center"
                direction="row"
                alignItems="center"
              >
                <Grid item xs>
                  <Button variant="contained" color="primary">
                    Photos
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button variant="outlined" color="primary">
                    Secondary
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  classname={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
