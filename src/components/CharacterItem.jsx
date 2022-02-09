import React from "react";

const CharacterItem = ({ character }) => {
  return (
    <>
      <li>
        <img className="m-5 rounded-full w-80" src={character.img} alt="" />
        <div>
          <h1>{character.name}</h1>
          <p>
            <strong>Birthday: </strong> {character.birthday}
          </p>
          <p>
            <strong>NickName: </strong>
            {character.nickname}
          </p>
          <p>
            <strong>Status: </strong>
            {character.status}
          </p>
          <p>{character.occupations}</p>
        </div>
      </li>
    </>
  );
};

export default CharacterItem;
