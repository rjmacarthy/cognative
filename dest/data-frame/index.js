"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumSquares = exports.dot = exports.pow = exports.random = exports.zeros = exports.fill = exports.abs = exports.matMul = exports.multiply = exports.divide = exports.subtract = exports.add = exports.cumSum = exports.stddev = exports.sqrt = exports.mean = void 0;
var _ = require("lodash");
var b = require("../base");
var s = require("../series");
var mean = function (x) {
    return b.compose(b.transpose, function (x) { return b.sFn(x, s.sMean); }, b.inverseTranspose)(x);
};
exports.mean = mean;
var sqrt = function (x) {
    return b.compose(b.transpose, function (x) { return b.sFn(x, s.sSqrt); }, b.inverseTranspose)(x);
};
exports.sqrt = sqrt;
var stddev = function (x) { return b.compose(b.transpose, function (x) { return b.sFn(x, s.sStd); })(x); };
exports.stddev = stddev;
var cumSum = function (x) {
    return b.compose(b.inverseTranspose, function (x) { return b.sFn(x, s.sCumSum); }, b.transpose)(x);
};
exports.cumSum = cumSum;
var add = function (x) { return b.compose(b.transpose, function (x) { return b.sFn(x, s.sAdd); })(x); };
exports.add = add;
var subtract = function (x) {
    return b.compose(b.transpose, function (x) { return b.sFn(x, s.sSubtract); })(x);
};
exports.subtract = subtract;
var divide = function (x) {
    return b.compose(b.transpose, function (x) { return b.sFn(x, s.sDivide); })(x);
};
exports.divide = divide;
var multiply = function (x) {
    return b.compose(b.transpose, function (x) { return b.sFn(x, s.sMultiply); })(x);
};
exports.multiply = multiply;
var matMul = function (x, y) {
    return _.map(b.transpose(x), function (r, ri) {
        return _.map(r, function (n, i) { return n * _.get(b.transpose(y), [ri, i]); });
    });
};
exports.matMul = matMul;
var abs = function (x) { return b.sFn(x, s.sAbs); };
exports.abs = abs;
var fill = function (i, t) { return _.fill(Array(t), i); };
exports.fill = fill;
var zeros = function (r, c) { return _.map(_.times(r, function () { return s.sZeros(c); })); };
exports.zeros = zeros;
var random = function (r, c, min, max) {
    return _.map(_.times(r, function () { return s.sRandom(c, min, max); }));
};
exports.random = random;
var pow = function (x, p) { return b.sFn(x, function (x) { return s.sPow(x, p); }); };
exports.pow = pow;
var dot = function (a, b) {
    return _.reduce(a, function (acc, n, i) { return _.add(acc, _.multiply(n, _.get(b, i))); }, 0);
};
exports.dot = dot;
var sumSquares = function (x, y) {
    return _.divide(_.sum(_.map(x, function (n, i) { return Math.pow((n - _.get(y, i)), 2); })), _.size(x));
};
exports.sumSquares = sumSquares;
