import CryptoJS from "crypto-js";

const AUTH_SERVER_URL = 'https://sso.bornlogic.com'

const redirectToLoginUrl = (clientId, redirectUri, scopes) => {
    scopes = JSON.parse(scopes)

    const { loginUrl, state, codeVerifier } = buildAuthParams(
        clientId,
        redirectUri,
        scopes,
    );
    handleLocalstorage(clientId, "auth-state", state, true);
    handleLocalstorage(clientId, "code-verifier", codeVerifier, true);
    window.location.href = String(loginUrl);
};

const buildAuthParams = (clientId, redirectUri, scopes, businessId) => {
    const baseUrl = AUTH_SERVER_URL;
    const codeChallengeMethod = "S256";
    const responseType = "code";
    const prompt = "consent";
    const loginUrl = new URL(baseUrl + "/connect/authorize");
    const codeVerifier = generateRandomString(100);
    const nonce = generateRandomString(100);
    const state = encodeParamsToBase64();
    const codeChallenge = generateCodeChallenge(codeVerifier);

    loginUrl.searchParams.append("client_id", clientId);
    loginUrl.searchParams.append("redirect_uri", redirectUri);
    loginUrl.searchParams.append("response_type", responseType);
    loginUrl.searchParams.append("prompt", prompt);
    loginUrl.searchParams.append("scope", scopes.join(" "));
    loginUrl.searchParams.append("code_challenge_method", codeChallengeMethod);
    loginUrl.searchParams.append("code_challenge", codeChallenge);
    loginUrl.searchParams.append("nonce", nonce);
    loginUrl.searchParams.append("state", state);

    return {
        loginUrl,
        state,
        codeVerifier: codeVerifier,
    };
};

export const generateRandomString = (length) => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return [...Array(length)]
        .map(() => characters[Math.floor(Math.random() * characters.length)])
        .join("");
};

const encodeParamsToBase64 = () => {
    const params = getUrlParams();
    const encodedParams = btoa(JSON.stringify(params));

    return encodedParams;
};

const getUrlParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};

    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
    }

    return params;
};

export function generateCodeChallenge(codeVerifier) {
    let sha256 = CryptoJS.SHA256(codeVerifier);
    let base64 = sha256
        .toString(CryptoJS.enc.Base64)
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");

    return base64;
}

function handleLocalstorage(id, key, value, isAdd) {
    const storedObject = getJsonInLocalStorage(id);

    if (isAdd) {
        storedObject[key] = value;
    } else {
        delete storedObject[key];
    }

    localStorage.setItem(id, JSON.stringify(storedObject));
}

export const getJsonInLocalStorage = (key) => {
    let storedObject = {};
    const storedItem = localStorage.getItem(key);

    if (storedItem !== null) {
        try {
            storedObject = JSON.parse(storedItem);
        } catch (err) {
            storedObject = {};
        }
    }

    return storedObject;
};

export { redirectToLoginUrl }