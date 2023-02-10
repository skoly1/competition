import axios from "axios";

const url =
  "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

export async function getNewsData() {
  return axios.get(url).then((res: any) => {
    return { status: res.status, data: res.data, text: res.statusText };
  });
}
