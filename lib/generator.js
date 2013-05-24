module.exports = function(range) {
  range = range || 30;
  return function (x, y, z) {
    if (x >= range || x <= -range) return 0;
    if (z >= range || z <= -range) return 0;
    if (y <= -15 && y >= -range) return 4;
    return 0;
  }
};
