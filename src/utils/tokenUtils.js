const tokenKey = 'umToken';
const userNameKey = 'umUserName';
const userIdKey = 'umUserId';

//import {getToken, setToken, clean, lsGet, lsSet, lsRemove, userNameKey, userIdKey} from "@/utils/tokenUtils";

export {userNameKey, userIdKey}

export function getToken() {
    return lsGet(tokenKey);
}

export function setToken(token) {
    lsSet(tokenKey, token);
}

export function clean() {
    localStorage.clear();
}


export function lsGet(k) {
    return localStorage.getItem(k);
}

export function lsSet(k, v) {
    localStorage.setItem(k, v);
}

export function lsRemove(k) {
    localStorage.removeItem(k)
}
