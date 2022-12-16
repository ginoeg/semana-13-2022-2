import {
  Box,
  InputLabel,
  FormControl,
  MenuItem,
  Typography,
  Select,
} from "@mui/material";

const DropDown = ({ type, handleChange, types }) => {
  return (
    <Box
      mt={5}
      sx={{
        backgroundColor: "yellow",
        textColor: "light",
        padding: "2em",
      }}
    >
      <Typography variant="h4" mb={3}>
        Tipo de pokemones
      </Typography>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            backgroundColor: "red",
          }}
        >
          Tipos
        </InputLabel>
        <Select
          value={type}
          label="Tipos"
          onChange={handleChange}
          sx={{
            "&:hover": {
              backgroundColor: "red",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {types.length > 0 &&
            types.map(({ url, name }) => (
              <MenuItem value={url}>{name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
