import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
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
  // const season1 = listEpisodes1.filter(item )

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
      <div className="py-12 bg-white">
        <h1 className="ml-16 text-lg leading-6 font-medium text-gray-900 text-center">
          Episodes
        </h1>
        <ClipLoader color={color} loading={loading} css={override} size={150} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative text-center">
                <dt>
                  {listEpisodesBCS &&
                    Object.values(listEpisodesBCS).map((season, i) => (
                      <SeasonList key={i} season={season} />
                    ))}
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* <h1 className="font-bold tracking-wide text-2xl text-center">Episodes</h1>

      <ClipLoader color={color} loading={loading} css={override} size={150} />
      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

      <div className="ml-16 text-lg leading-6 font-medium text-gray-900">
        {listEpisodesBCS && Object.values(listEpisodesBCS).map((season,i) => (
          <SeasonList key={i} season={season}/>
          ))}
      </div>
          </div>
      <div >
        {listEpisodesBB && Object.values(listEpisodesBB).map((season,i) => (
         <SeasonList key={i} season={season}/>
        ))}
      </div> */}
      {/* <div>
        {listEpisodesBB && Object.values(listEpisodesBB).map((season) => (
          season.map(episode=>(
            <Col key={episode.episode_id} sm={12} md={6} lg={4} xl={3}>
            <EpisodeCard episode={episode} />
          </Col>
          
          ))
        ))}
      </Row> */}
    </>
  );
};

export default HomePage;
