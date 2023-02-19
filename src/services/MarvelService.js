import axios from "axios";
import cryptoJs from "crypto-js";

const baseEndPoint = "http://gateway.marvel.com";
const charactersEndpoint = "/v1/public/characters";
const timeStamp = Date.now();
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const hash = cryptoJs.MD5(`${timeStamp}${privateKey}${publicKey}`);

let params = {
  ts: timeStamp,
  apikey: publicKey,
  hash: hash,
};

export default class MarvelService {
  async GetCharacters() {
    try {
      const response = await axios.get(`${baseEndPoint}${charactersEndpoint}`, {
        params,
      });
      console.log("Get characters", response);
    } catch (error) {
      console.log(error);
    }
  }

  async GetCharacter(id) {
    try {
      const response = await axios.get(
        `${baseEndPoint}${charactersEndpoint}/${id}`,
        {
          params,
        }
      );
      console.log("Get characters by id", response);
    } catch (error) {
      console.log(error);
    }
  }
  //1010870
  async GetComicsByCharacterId(id) {
    try {
      const response = await axios.get(
        `${baseEndPoint}${charactersEndpoint}/${id}/comics`,
        {
          params,
        }
      );
      console.log("Get comics", response);
    } catch (error) {
      console.log(error);
    }
  }
}
