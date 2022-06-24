const factorial = require('./factorial')
const arrangement = require('./arrangement')
// C-Combination 组合数
module.exports = combination = (m, n) => {
    return arrangement(m, n) / factorial(m)
    // return factorial(n) / (factorial(m) * factorial(n - m))
}