// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

// click login button
// redirect to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirect to homepage when logged in
const redirectUri = "https://spotify-clone-6de7d.web.app/";

// client id
const clientId = "76c8aed8c7754476aa9a45ae3b6130fe"

// permissions to allow spotify clone to read client id and modify playback state
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;