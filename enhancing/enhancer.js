module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    item.enhancement += 1;
    return { ...item };
  }
}

function fail(item) {
  if (item.enhancement >= 15) {
    item.durability -= 10;
    return { ...item };
  } else if (item.enhancement < 15) {
    item.durability -= 5;
    return { ...item };
  } else {
    return { ...item };
  }
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
