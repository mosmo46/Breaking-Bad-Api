import React from "react";
import { Link } from "react-router-dom";

const SeasonList = ({ season }) => {
  const isBetterCallSoul = season[0].series === "Better Call Saul";
  const seasonImage = isBetterCallSoul ? "BetterCallSaul" : "BreakingBad";
  return (
    <>
      <h1 className="font-bold m-4 text-center">
        season : <strong>{season[0].season}</strong>
      </h1>
      <img
        style={{
          width: "150px",
          height: "200px",

          margin: "auto",
        }}
        src={`./images/${seasonImage}.png`}
        alt="img"
      />

      <div className="shadow-lg">
        <div>
          <ul className="m-4">
            {season.map((episode) => (
              <li key={episode.episode_id}>
                <div>
                  <Link
                    className="font-bold"
                    to={`/episodes/${episode.episode_id}`}
                  >
                    Episodes : {episode.title}
                  </Link>
                  <p>Air Date : {episode.air_date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SeasonList;
