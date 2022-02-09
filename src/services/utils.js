import { getEpisodesBySeries } from "./api";

export async function getEpisode() {

  const [BCSRes, BBRes] = await Promise.all([
    getEpisodesBySeries("Better+Call+Saul"),
    getEpisodesBySeries("Breaking+Bad"),
  ]);


  const BCSBySeason = {};
  const BBBySeason = {};

  BCSRes.forEach((eps) => {
    const s = Number(eps.season);
    if (BCSBySeason.hasOwnProperty(s)) {
      BCSBySeason[s].push(eps);
    } else {
      BCSBySeason[s] = [eps];
    }
  }, {});
  console.log(BCSBySeason);

  BBRes.forEach((eps) => {
    const s = Number(eps.season);
    if (BBBySeason.hasOwnProperty(s)) {
      BBBySeason[s].push(eps);
    } else {
      BBBySeason[s] = [eps];
    }
  });
  console.log(BBBySeason);

  return { BCSBySeason, BBBySeason };
}
