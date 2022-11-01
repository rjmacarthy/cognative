"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiVariateLinearRegression = void 0;
var _ = require("lodash");
var base_1 = require("../base");
var data_frame_1 = require("../data-frame");
var series_1 = require("../series");
var multiVariateLinearRegression = function (x, iterations) {
    var features = x.features, labels = x.labels;
    var s = (0, base_1.shape)(features);
    var n = _.last(s) || 0;
    var weights = (0, series_1.sZeros)(n);
    var bias = 0;
    var costs = _.map(_.times(iterations), function () {
        var predictions = _.map(features, function (f) { return (0, data_frame_1.dot)(weights, f) + bias; });
        var cost = (0, data_frame_1.sumSquares)(predictions, labels);
        var gradients = getGradients(features, labels, predictions);
        weights = gradients.weights;
        bias = gradients.bias;
        return cost;
    });
    return {
        weights: weights,
        bias: bias,
        costs: costs
    };
};
exports.multiVariateLinearRegression = multiVariateLinearRegression;
var getGradients = function (features, labels, predictions) {
    var _a = (0, base_1.shape)(features), m = _a[0], n = _a[1];
    var weights = (0, series_1.sZeros)(n);
    var bias = 0;
    _.forEach(_.times(m), function (i) {
        var error = _.get(predictions, i) - _.get(labels, i);
        _.forEach(_.times(n), function (j) {
            weights[j] += error * features[i][j];
        });
        bias += error;
    });
    return {
        weights: weights.map(function (w) { return w / m; }),
        bias: bias / m
    };
};
