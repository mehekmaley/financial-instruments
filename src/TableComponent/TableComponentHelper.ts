export const orderCompare = (a: string, b: string, order: Record<string, number>): number => {
    const aOrder = order[a] || 0; 
    const bOrder = order[b] || 0;
    return aOrder - bOrder;
};

export const getColor = (assetClass: string) => {
    switch (assetClass) {
      case 'Macro':
        return 'white';
      case 'Equities':
        return '#7CB9E8';
      case 'Credit':
        return '#32de84';
      default:
        return 'transparent';
    }
};

export const getPriceColor = (price: number) => (price >= 0 ? 'black' : 'red');
