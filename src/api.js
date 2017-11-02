const url =
  "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=reactnative&site=stackoverflow";
class Api {
  constructor(url) {
    this.url = url;
  }

  loading(userData) {
    return fetch(url, {
      method: "GET"
    }).then(data => data.json());
  }
}
export default new Api(url);
