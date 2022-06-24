const factorial = require('./factorial')
// A-Arrangement 排列数（在旧教材为P-Permutation）
module.exports = arrangement = (m, n) => {
    return factorial(n, n - m)
    // return factorial(n) / factorial(n - m)
}