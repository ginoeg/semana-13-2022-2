import { useState, useEffect } from "react";
import { CardPokemon, DropDown } from "../../components";
import { Container } from "@mui/material";
import { get } from "../../services";

const Pokemons = () => {
  const [type, setType] = useState("https://pokeapi.co/api/v2/type/1/");

  const [types, setTypes] = useState([]);

  const [pokemons, setPokemons] = useState([]);

  async function getTypes() {
    const types = await get("type");
    setTypes(types.results);

    await getPokemons(type);
  }

  async function getPokemons(url) {
    const id = url.split("/");
    const pokemons = await get(`type/${id[id.length - 2]}`);
    setPokemons(pokemons.pokemon);
  }

  const handleChange = (event) => {
    setType(event.target.value);
    getPokemons(event.target.value);
  };

  useEffect(() => {
    // llamo a la funciona
    getTypes();
  }, []);

  return (
    <Container>
      <DropDown type={type} handleChange={handleChange} types={types} />
      <CardPokemon pokemons={pokemons} />
    </Container>
  );
};

export default Pokemons;
