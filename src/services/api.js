import axios from "axios";

export async function getEpisodesBySeries(series) {
  const { data } = await axios.get(
    `https://www.breakingbadapi.com/api/episodes?series=${series}`
  );
  return data;
}


export async function getEpisodeByID(id) {
  const {data}  = await axios.get(
    `https://www.breakingbadapi.com/api/episodes/${id}`
  );
  return data[0];
}


export async function getCharacterByName(name) {
  const {data}  = await axios.get(
    `https://www.breakingbadapi.com/api/characters?name=${name.replace(' ', '+')}`
  );
  console.log(data);
  return data[0];
}