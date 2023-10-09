
export function getExpirationTime(token) {

  const jwt = token.split('.');
  const payload = JSON.parse(atob(jwt[1]));
  const expirationTime = payload.exp * 1000;
  return expirationTime;
}

export function filterArray(selectedOption, data) {
  switch (selectedOption) {
    case 'Correct':
      return data.filter(item => item.quantity >= 100)
    case 'Faible':
      return data.filter(item => item.quantity >= 50 && item.quantity < 100)
    case 'Critique':
      return data.filter(item => item.quantity < 50)
    case 'Tout':
      return data
    default:
      return data
  }
}

export function badgeColor(quantity) {

  if (quantity < 50) {
    return 'red'
  } else if (quantity >= 50 && quantity < 100) {
    return 'orange'
  } else {
    return 'green'
  }

}

