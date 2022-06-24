const combination = require('./combination')
const simplifiedFraction = require('./simplifiedFraction')
/*
某企业将5台不同的笔记本电脑和5台不同的平板电脑捐赠给甲、乙两所小学，每所学校分配5台电脑。如在所有可能的分配方式中随机选取一种，两所学校分得的平板电脑数量均不超过3台的概率为：
*/
const top = combination(3, 5) * combination(2, 5) * 2
const bottom = combination(5, 10)
console.log(simplifiedFraction(top, bottom))