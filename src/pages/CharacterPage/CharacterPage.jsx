import React, { useState, useEffect } from "react";
import { getCharacterByName } from "../../services/api";
import { useParams } from "react-router-dom";
import CharacterItem from "../../components/CharacterItem";
export default function CharacterPage() {
  const [character, setCharacter] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterByName(name);
      setCharacter(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      <CharacterItem character={character} />
    </ul>
  );
}
