import axios from "axios";

import { convertEmptyStringToPlusSign } from "./utils";


export async function getEpisodesBySeries(series) {
  const { data } = await axios.get(
    `https://www.breakingbadapi.com/api/episodes?series=${series}`
  );
  return data;
}

export async function getEpisodeByID(id) {
  const { data } = await axios.get(
    `https://www.breakingbadapi.com/api/episodes/${id}`
  );
  return data[0];
}

export async function getCharacterByName(name) {
  const { data } = await axios.get(
    `https://www.breakingbadapi.com/api/characters?name=${convertEmptyStringToPlusSign(
      name
    )}`
  );
  return data[0];
}


