import React from "react";
import { Link } from "react-router-dom";

const SeasonList = ({ season }) => {
  return (
    <>
      <h1 className="font-bold text-center">
        season : <strong>{season[0].season}</strong>
      </h1>
      {season[0].series === "Better Call Saul" ? (
        <img
          style={{
            width: "150px",
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
          className="text-center"
          src="./images/1.png"
          alt="img"
        />
      ) : (
        <img
          style={{
            width: "150px",
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
          className="text-center"
          src="./images/2.jpg"
          alt="img"
        />
      )}

      <div className="relative">
        <div>
          <ul className="ml-16 text-lg leading-6 font-medium text-gray-900">
            {season.map((episode) => (
              <li
                className="flex py-4 first:pt-0 last:pb-0"
                key={episode.episode_id}
              >
                <div className="ml-3 overflow-hidden">
                  <Link
                    className="ml-16 text-lx leading-6 font-medium text-gray-900"
                    to={`/episodes/${episode.episode_id}`}
                  >
                    Episodes : {episode.title}
                  </Link>
                  <p className="ml-16 text-sm leading-6 font-medium text-gray-900">
                    Air Date : {episode.air_date}
                  </p>
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
