"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPow = exports.sCumSum = exports.sRandom = exports.sZeros = exports.sStd = exports.sDouble = exports.sReverse = exports.sAbs = exports.sSubtract = exports.sMultiply = exports.sDivide = exports.sAdd = exports.sSqrt = exports.sMean = exports.mean = void 0;
var _ = require("lodash");
var mean = function (ns) { return _.sum(ns) / _.size(ns); };
exports.mean = mean;
var sMean = function (ns) { return _.map(ns, function () { return (0, exports.mean)(ns); }); };
exports.sMean = sMean;
var sSqrt = function (ns) { return _.map(ns, function (n) { return Math.sqrt(n); }); };
exports.sSqrt = sSqrt;
var sAdd = function (ns) { return _.sum(ns); };
exports.sAdd = sAdd;
var sDivide = function (ns) { return _.reduce(ns, function (a, b) { return a / b; }); };
exports.sDivide = sDivide;
var sMultiply = function (ns) { return _.reduce(ns, function (a, b) { return a * b; }); };
exports.sMultiply = sMultiply;
var sSubtract = function (ns) { return _.reduce(ns, function (a, b) { return a - b; }); };
exports.sSubtract = sSubtract;
var sAbs = function (ns) { return _.map(ns, function (n) { return Math.abs(n); }); };
exports.sAbs = sAbs;
var sReverse = function (x) { return _.reverse(x); };
exports.sReverse = sReverse;
var sDouble = function (ns) { return _.map(ns, function (x) { return x * 2; }); };
exports.sDouble = sDouble;
var sStd = function (ns) {
    return Math.sqrt((0, exports.mean)(_.map(ns, function (n) { return _.multiply(n - (0, exports.mean)(ns), n - (0, exports.mean)(ns)); })));
};
exports.sStd = sStd;
var sZeros = function (n) { return _.fill(Array(n), 0, 0); };
exports.sZeros = sZeros;
var sRandom = function (n, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return _.fill(Array(n), _.random(min, max, true));
};
exports.sRandom = sRandom;
var sCumSum = function (ns) {
    return _.map(ns, (function (sum) { return function (value) {
        return (sum += value);
    }; })(0));
};
exports.sCumSum = sCumSum;
var sPow = function (ns, p) { return _.map(ns, function (x) { return Math.pow(x, p); }); };
exports.sPow = sPow;
