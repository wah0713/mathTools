const GCD = (m, n) => {
    return n ? GCD(n, m % n) : m
}
// 化简分数
module.exports = simplifiedFraction = (m, n) => {
    const gcd = GCD(m, n)
    return `${m/gcd}/${n/gcd}`
}