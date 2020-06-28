const derive = (coefficient, exponent) => `${coefficient * exponent}x^${exponent - 1}`;

module.exports = derive;
