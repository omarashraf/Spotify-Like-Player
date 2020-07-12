import axios from 'axios';
import querystring from 'querystring';

const AUTH_URL = 'https://accounts.spotify.com/api/token';
// TODO: use env vars instead
const CLIENT_ID = 'a62607bbccb144d482604949df653347';
const CLIENT_SECRET = '99c1a02ccd5247e2879946d9fa452c64';

export const getToken = async () => {
    let data = await axios({
        url: AUTH_URL,
        method: 'post',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        data: querystring.stringify({
              grant_type: 'client_credentials'
        }),
    });
    return data.data.access_token;
}