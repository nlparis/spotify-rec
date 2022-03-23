// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = 'http://localhost:3000/'
const clientId = "1ed9249c1e7a4de98f9e11d4dfe8e4d1"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&showdialog=true`

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce ((initial: any, item) =>{
            // #accessToken=mysecretkev&name=somerandomname
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent (parts[1])
            return initial
        }, {});
}