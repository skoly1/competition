import axios from "axios";

// const url =
//   "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

// const url = "https://swapi.dev/api/people";
const url =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=accf793f9a4fa578ea282aaec9f5f267&hash=9c673e9b1531fa1af1e3432c3a8b464f";

export async function getNewsData() {
  const response = await axios.get(url);
  console.log(response);

  return {
    status: response.status,
    data: response.data.data.results,
    text: response.statusText,
  };
}
