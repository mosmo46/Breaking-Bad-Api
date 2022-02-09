import { getEpisodesBySeries } from "./api";
import { BETTER_CALL_SAUL_SERIES, BREAKING_BAD_SERIES } from "./constants";

export const convertEmptyStringToPlusSign = (term) => {
  const PLUS = "+";
  return term.split(" ").join(PLUS);
};
export async function getEpisode() {
  const [BCSRes, BBRes] = await Promise.all([
    getEpisodesBySeries(
      convertEmptyStringToPlusSign(BETTER_CALL_SAUL_SERIES.name)
    ),
    getEpisodesBySeries(convertEmptyStringToPlusSign(BREAKING_BAD_SERIES.name)),
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

  BBRes.forEach((eps) => {
    const s = Number(eps.season);
    if (BBBySeason.hasOwnProperty(s)) {
      BBBySeason[s].push(eps);
    } else {
      BBBySeason[s] = [eps];
    }
  });

  return { BCSBySeason, BBBySeason };
}
