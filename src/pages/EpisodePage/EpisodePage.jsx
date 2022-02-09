import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getEpisodeByID } from "../../services/api";

const EpisodePage = () => {
  const [episodeByID, setEpisodeByID] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEpisodeByID(id);
      setEpisodeByID(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid justify-items-center text-2xl">
      <h1 className="font-bold mb-5 ml-16 mt-5 text-2xl text-center">
        Episode Page
      </h1>
      <h1>
        <strong className="font-bold">Episode :</strong> {episodeByID.title}
      </h1>
      <h2>
        <strong className="font-bold">Air Date :</strong> {episodeByID.air_date}
      </h2>
      <h1 className="font-bold m-2">Characters</h1>

      {episodeByID.characters &&
        episodeByID.characters.map((character, i) => (
          <div key={i}>
            <Link
              className="no-underline hover:underline font-semibold"
              key={i}
              to={`/characters/${character}`}
            >
              {character}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default EpisodePage;
