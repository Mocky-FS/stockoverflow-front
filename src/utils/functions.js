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

export function badgeColorQuantity(quantity) {

  if (quantity < 50) {
    return 'red'
  } else if (quantity >= 50 && quantity < 100) {
    return 'orange'
  } else {
    return 'green'
  }

}

export function badgeColorStatus(status) {
  switch (status) {
    case 'Validée':
      return 'emerald'
    case 'En attente':
      return 'orange'
    case 'Annulée':
      return 'red'
    default:
      return 'emerald'
  }
}



export async function hash (string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}

export function formatDate (date){


  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  const d = new Date(date)
  return d.toLocaleDateString('fr-FR', options)
}