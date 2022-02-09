import React from "react";

const CharacterItem = ({ character }) => {


  return (
    <li className="py-4 flex">
      <img className="h-auto w-80 rounded-full" src={character.img ? character.img : '/images/2.jpg'} alt="" />
      <div className="ml-3 text-center">
        <h1 className="text-sm font-medium text-gray-900">{character.name}</h1>
        <p className="text-sm text-gray-500">
          <strong>Birthday: </strong> {character.birthday}
        </p>
        <p className="text-sm text-gray-500"><strong>NickName: </strong>{character.nickname}</p>
        <p className="text-sm text-gray-500"><strong>Status: </strong>{character.status}</p>
        <p className="text-sm text-gray-500">{character.occupations}</p>
      </div>
    </li>
  );
};



export default CharacterItem;


// CharacterItem.defaultProps  = {
//   img: ,
//   name: 'no',
//   birthday: 'no',
//   nickname: 'no',
//   status: 'no',
//   occupations: 'no'
// };