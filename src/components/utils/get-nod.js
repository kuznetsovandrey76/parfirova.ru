const getNod = (x, y) => {
  if (y > x) return getNod(y, x);
  if (!y) return x;
  return getNod(y, x % y);
};

export default getNod;
