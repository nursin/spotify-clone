// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

// click login button
// redirect to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirect to homepage when logged in
const redirectUri = "http://localhost:3000/";

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

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;