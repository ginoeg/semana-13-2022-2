import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const CardPokemons = ({ pokemons }) => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        marginTop: "2%",
        paddingLeft: "1em",
        paddingRight: "1em",
      }}
    >
      <Grid container spacing={3} mt={3}>
        {pokemons.length > 0 &&
          pokemons.map(({ pokemon }) => (
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: "yellow", padding: "1rem" }}>
                <CardMedia
                  component="img"
                  width={200}
                  height={300}
                  image={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    pokemon.url.split("/")[6]
                  }.svg`}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body1">{pokemon.name}</Typography>

                  <Button
                    sx={{
                      padding: "1em",
                      textColor: "light",
                    }}
                  >
                    Ver detalle
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardPokemons;
