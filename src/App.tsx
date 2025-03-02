import Container from "@mui/material/Container";
import "./App.css";
import Typography from "@mui/material/Typography";
import { ItemForm } from "./Components/ItemForm";
import { ItemSearch } from "./Components/ItemSearch";
import { ItemsList } from "./Components/ItemsList";

function App() {
  return (
    <>
      <h1>Redux Toolkit з нуля</h1>

      <Container
        maxWidth="sm"
        sx={{
          height: "80vh",
          marginTop: "48px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Online Shop Admin
        </Typography>

        <ItemForm />

        <Typography variant="h5" sx={{ mt: 4 }}>
          My items
        </Typography>

        <ItemSearch />

        <ItemsList />
      </Container>
    </>
  );
}

export default App;
