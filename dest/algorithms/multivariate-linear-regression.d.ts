export declare const multiVariateLinearRegression: (x: {
    features: Matrix;
    labels: Series;
}, iterations: number) => {
    weights: any[];
    bias: number;
    costs: number[];
};
