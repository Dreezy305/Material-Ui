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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
                <Grid item>
                  <Button variant="contained" color="primary">
                    SEE MY PHOTOS
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    SECONDARY ACTIONS
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This card media. The contents goes here
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          This is a nice footer. it is always located at the bottom of the main
          tag n a semantic html
        </Typography>
      </footer>
    </>
  );
}

export default App;
