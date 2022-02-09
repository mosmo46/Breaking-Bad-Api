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
    <div className="container">
      <ul>
        <h1>EpisodePage</h1>
        <h1>Episode : {episodeByID.title}</h1>
        <h2>Air Date : {episodeByID.air_date}</h2>

        <h1 className="text-base">Characters : </h1>

        {episodeByID.characters &&
          episodeByID.characters.map((character, i) => (
            <div key={i}>
              <Link
                className="no-underline hover:underline"
                key={i}
                to={`/characters/${character}`}
              >
                {character}
              </Link>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default EpisodePage;
