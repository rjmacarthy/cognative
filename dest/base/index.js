"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is1d = exports.isSameShape = exports.isSquare = exports.shape = exports.inverseTranspose = exports.transpose = exports.swap = exports.sFill = exports.sFn = exports.compose = void 0;
var _ = require("lodash");
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (args) {
        return _.reduce(fns, function (arg, fn) { return fn(arg); }, args);
    };
};
exports.compose = compose;
var sFn = function (x, fn) {
    return _.map(x, _.memoize(function (r) { return fn(r); }));
};
exports.sFn = sFn;
var sFill = function (size, x) { return _.fill(Array(size), x); };
exports.sFill = sFill;
var swap = function (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
};
exports.swap = swap;
exports.transpose = _.memoize(function (x) {
    return _.map(_.first(x), function (_v, i) { return _.reverse(_.map(x, function (r) { return r[i]; })); });
});
exports.inverseTranspose = _.memoize(function (x) {
    return _.map(_.first(x), function (_v, i) { return _.map(x, function (r) { return r[_.size(r) - 1 - i]; }); });
});
exports.shape = _.memoize(function (x) { return [_.size(x), _.size(_.first(x))]; });
exports.isSquare = _.memoize(function (x) { return _.get((0, exports.shape)(x), 0) === _.get((0, exports.shape)(x), 1); });
var isSameShape = function (x, y) {
    return _.get((0, exports.shape)(x), 0) === _.get((0, exports.shape)(y), 0) &&
        _.get((0, exports.shape)(x), 1) === _.get((0, exports.shape)(y), 1);
};
exports.isSameShape = isSameShape;
var is1d = function (x) { return _.get((0, exports.shape)(x), 0) === 1; };
exports.is1d = is1d;
// implement train test split random based on test size.
