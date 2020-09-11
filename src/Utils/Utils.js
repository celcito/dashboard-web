  //Compare objects  array to sort in alphabetic order
export const compare=(a, b) => {
    const itemA = a.name.first.toUpperCase();
    const itemB = b.name.first.toUpperCase();
  
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }

  