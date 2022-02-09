import React, { useState, useEffect } from "react";

import SeasonList from "../../components/SeasonList";
import { getEpisode } from "../../services/utils";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const HomePage = () => {
  const [listEpisodesBCS, setListEpisodesBCS] = useState(null);
  const [listEpisodesBB, setListEpisodesBB] = useState(null);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEpisode();

      try {
        setListEpisodesBCS(data.BCSBySeason);
        setListEpisodesBB(data.BBBySeason);
        setLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="font-bold mb-5 ml-16 mt-5 text-2xl text-center">
        Episodes
      </h1>
      <div className="container flex justify-content-around">
        <ClipLoader color={color} loading={loading} css={override} size={150} />

        <div>
          {listEpisodesBCS &&
            Object.values(listEpisodesBCS).map((season, i) => (
              <SeasonList key={i} season={season} />
            ))}
        </div>

        <div>
          {listEpisodesBB &&
            Object.values(listEpisodesBB).map((season, i) => (
              <SeasonList key={i} season={season} />
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
