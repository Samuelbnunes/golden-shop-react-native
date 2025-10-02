export const formatPriceBRL = (value) => {
  return new Intl.NumberFormat('rs-RS', { style: 'currency', currency: 'BRL' }).format(value);
};
