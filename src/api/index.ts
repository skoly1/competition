import axios from "axios";

// ("https://gateway.marvel.com/v1/public/characters?ts=1?limit=10&apikey=accf793f9a4fa578ea282aaec9f5f267&hash=9c673e9b1531fa1af1e3432c3a8b464f");

export async function getNewsData(
  type: string,
  object?: {
    id?: number;
    event?: string;
    limit?: number;
  }
) {
  let key = `?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_KEY}`;
  let url = `${process.env.REACT_APP_MARVEL_API_URL}${type}`;
  if (object?.id) {
    url = `${url}/${object?.id}`;
  }
  if (object?.event) {
    url = `${url}/${object?.event}`;
  }

  url = `${url}${key}`;

  const response = await axios.get(url, {
    params: {
      limit: `${object?.limit}`,
    },
  });

  return {
    status: response.status,
    data: response.data.data.results,
    text: response.statusText,
  };
}
