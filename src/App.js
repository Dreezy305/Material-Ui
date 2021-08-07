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
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
            ></Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
