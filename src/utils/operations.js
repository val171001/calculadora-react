const isNanOrNull = (val) => !(/^-*\d+(\.)*\d*$/.test(val));
const verification = (op1, op2, callback) => (
  isNanOrNull(op1) || isNanOrNull(op2) ? null : callback(+op1, +op2)
);
const mod = (op1, op2) => (verification(op1, op2, (a, b) => (a % b)));
const mul = (op1, op2) => (verification(op1, op2, (a, b) => (a * b)));
const sum = (op1, op2) => (verification(op1, op2, (a, b) => (a + b)));
const sub = (op1, op2) => (verification(op1, op2, (a, b) => (a - b)));
const div = (op1, op2) => (verification(op1, op2, (a, b) => ((a / b).toPrecision(8))));

module.exports = {
  mod, mul, sum, sub, div,
};
