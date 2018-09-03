// 找出小于等于n的所有素数
function isPrimeNum(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function count(max) {
    let num = 2
    let primeList = []
    const start = (new Date()).valueOf()
    while (num <= max) {
        if (isPrimeNum(num)) {
            primeList.push(num)
        }
        num++
    }
    const end = (new Date()).valueOf()
    console.log('素数总共有' + primeList.length + '个, 用时' + (end - start))
}


// 优化算法
function isPrimeNumFast(max) {
    let array = new Array(max)
    let primeList = []
    const start = (new Date()).valueOf()
    for (let j = 2; j < Math.sqrt(max); j++) {
        for (let i = j * j; i < max; i += j) {   // 这里i = j(j+1)更好理解，但是计算加法用时更少，所以算法中写加法
            array[i] = true
        }
    }
    for (let k = 2; k < max; k++) {
        if (!array[k]) {
            primeList.push(k)
        }
    }
    const end = (new Date()).valueOf()
    console.log('素数总共有' + primeList.length + '个, 用时' + (end - start))
}

