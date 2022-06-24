/**
 * num 阶乘的数字
 * limit 阶乘中断的值
 */
module.exports = factorial = (num, limit = 1) =>
    num === limit ? 1 : num * factorial(num - 1, limit)