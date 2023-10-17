


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

