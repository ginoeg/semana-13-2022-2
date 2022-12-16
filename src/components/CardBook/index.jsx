import {
  Paper,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
const CardBook = ({ book }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxHeight: "38rem",
        minHeight: "23rem",
        minWidth: "22rem",
        padding: 1,
        backgroundColor: "white",
        borderRadius: "1em",
      }}
    >
      <CardMedia
        component="img"
        image={book.volumeInfo?.imageLinks?.thumbnail}
        sx={{
          maxHeight: 200,
          minHeight: 150,
          borderRadius: 3,
        }}
      />
      <CardContent>
        <Box
          sx={{
            color: "black",
            padding: 1,
            borderRadius: 1,
          }}
        >
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6">{book.volumeInfo.title}</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6">{book.volumeInfo.authors}</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6">
                {book.volumeInfo.publishedDate}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default CardBook;
