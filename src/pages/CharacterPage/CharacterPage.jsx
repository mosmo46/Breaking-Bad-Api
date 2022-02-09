import React, { useState, useEffect } from "react";
import { getCharacterByName } from "../../services/api";
import { useParams } from "react-router-dom";
import CharacterItem from "../../components/CharacterItem";
import CharacterNotFound from "../../components/CharacterNotFound";
export default function CharacterPage() {
  const [character, setCharacter] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterByName(name);
      setCharacter(data);
    };
    fetchData();
  }, []);
  return (
    <ul className="grid justify-items-center m-5 text-center">
      {character ? (
        <CharacterItem character={character} />
      ) : (
        <>
          <CharacterNotFound name={name} />
        </>
      )}
    </ul>
  );
}
