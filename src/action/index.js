export function pressAll() {
  return {
    type: "PRESS_ALL",
  };
}

export function pressOne(id) {
  return {
    type: "PRESS_ONE",
    id,
  };
}
