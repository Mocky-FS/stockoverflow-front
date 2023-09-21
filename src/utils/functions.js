
export function getExpirationTime(token) {
  
    const jwt = token.split('.');
    const payload = JSON.parse(atob(jwt[1]));
    const expirationTime = payload.exp * 1000;
    return expirationTime;
  }