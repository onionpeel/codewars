const dutyFree = (normPrice, discount, holiday) => {
  let divisor = normPrice * (discount * .01);
  return Math.floor(holiday / divisor);
};

module.exports = dutyFree;
