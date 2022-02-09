import React from "react";

const CharacterNotFound = ({ name }) => {
  return (
    <div>
      <h2 className="m-5">
        Sorry there is no information about{" "}
        <strong>
          <br />
          {name}
        </strong>
      </h2>
      <h3>Feel free to google search here the link</h3>
      <li className="m-5 font-semibold">
        <a
          target="_blank"
          href={`https://www.google.com/search?q=${name}`}
          rel="noreferrer"
        >
          Link To Google
        </a>
      </li>
    </div>
  );
};

export default CharacterNotFound;
