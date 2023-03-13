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
  limit: 10,
};

export class MarvelService {
  GetCharacters(currentPage, orderBy) {
    const offset = currentPage * 10 - 10;
    return axios.get(`${baseEndPoint}${charactersEndpoint}`, {
      params: {
        ts: timeStamp,
        apikey: publicKey,
        hash: hash,
        limit: 10,
        offset,
        orderBy: orderBy || "name",
      },
    });
  }

  GetCharacter(id) {
    return axios.get(`${baseEndPoint}${charactersEndpoint}/${id}`, {
      params,
    });
  }
  //1010870
  GetComicsByCharacterId(id) {
    return axios.get(`${baseEndPoint}${charactersEndpoint}/${id}/comics`, {
      params,
    });
  }
}
