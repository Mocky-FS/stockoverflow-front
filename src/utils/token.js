export function isTokenValid(token) {

    if (!token) {
      return false;
    }
    const jwt = token.split('.');
    if (jwt.length !== 3) {
      // Le JWT doit contenir exactement trois parties
      return false;
    }
  
    const payload = JSON.parse(atob(jwt[1]));
    if (!payload.exp) {
      // Le JWT ne contient pas de date d'expiration
      return false;
    }
  
  
    const expirationTime = payload.exp * 1000; // Convertit en millisecondes
  
    const currentTime = Date.now();
  
    if (currentTime >= expirationTime) {
      // La date d'expiration est dépassée
      return false;
    }

    console.log(token)
  
    // Le JWT est valide
    return true;
}

export function getExpirationTime(token) {

  if (!token) {
    return false;
  }

    const jwt = token.split('.');
    const payload = JSON.parse(atob(jwt[1]));
    const expirationTime = payload.exp * 1000;
    return expirationTime;
}

export function isAdmin(token) {

  if (!token) {
    return null; 
  }
  
  const jwt = token.split('.');
  if (jwt.length !== 3) {
    return null; 
  }

  const payload = JSON.parse(atob(jwt[1]));
  if (!payload.exp) {
   
    return null; 
  }

  const expirationTime = payload.exp * 1000;
  const currentTime = Date.now();

  if (currentTime >= expirationTime) {
  
    return null; 
  }

  return payload.admin; 
}