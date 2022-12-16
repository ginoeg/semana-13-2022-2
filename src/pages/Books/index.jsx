import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { getBooks } from "../../services";
import { CardBook } from "../../components";

const Books = () => {
  const [search, setSearch] = useState("");

  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const books = await getBooks(search);
    setBooks(books.items);
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: "black", padding: 2 }}>
      <Box my={4}>
        <Card sx={{ backgroundColor: "yellow" }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Buscar un libro"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
                variant="outlined"
              />
              <Box my={2}>
                <Button onClick={handleSearch} size="large" variant="contained">
                  Buscar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "yellow",
        }}
      >
        <Grid container spacing={2} mt={3} sx={{ maxWidth: "95%" }}>
          {books.length > 0 &&
            books.map((book, index) => (
              <Grid item xs={12} sm={6} sx={{ padding: "2em" }}>
                <CardBook key={index} book={book} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Books;
