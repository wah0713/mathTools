const GCD = (m, n) => {
    return n ? GCD(n, m % n) : m
}
// åįŽåæ°
module.exports = simplifiedFraction = (m, n) => {
    const gcd = GCD(m, n)
    return `${m/gcd}/${n/gcd}`
}