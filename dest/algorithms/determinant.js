"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinant = void 0;
var lodash_1 = require("lodash");
var base_1 = require("../base");
var determinant = function (x) {
    if (!(0, base_1.isSquare)(x)) {
        return 0;
    }
    if (lodash_1.default.first((0, base_1.shape)(x)) === 2) {
        return (lodash_1.default.get(lodash_1.default.first(x), 0) * lodash_1.default.get(lodash_1.default.last(x), 1) -
            lodash_1.default.get(lodash_1.default.first(x), 1) * lodash_1.default.get(lodash_1.default.last(x), 0));
    }
};
exports.determinant = determinant;
