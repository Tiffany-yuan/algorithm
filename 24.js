// 24点算法

const opArr = new Array('+', '-', '*', '/')

/*
* 参数说明：
* 1、numArr：输入的四个数字
* 2、numLen：输入的数字个数
* 3、targetNum：输入四个数字后要计算出的结果
* */
function computeNum(numArr, numLen, targetNum) {
    for (let i = 0; i < numLen; i++) {
        for (let j = 0; j < numLen; j++) {
            let numij = [numArr[i], numArr[j]]
            numArr[j] = numArr[numLen - 1]
            for (let k = 0; k< opArr; k++){
                numArr[i] = '(' + numij[k % 2] + opArr[k] + numij[(!(k % 2) * 1)] + ')' //构建算术表达式，然后利用eval函数计算结果
                if (computeNum(numArr, numLen - 1, targetNum)) {
                    return true
                }
            }
            numArr[i] = numij[0]
            numArr[j] = numij[1]
        }
    }
    return (numLen == 1) && (eval( numArr[0]) == targetNum); //通过js的eval函数直接算出预期结果targetNum
}

//获取最终的计算表达式
function getExpression(numArr,targetNum) {
    if (computeNum(numArr, numArr.length, targetNum)) {
        return numArr[0].substring(1, numArr[0].length - 1) + "=" + String(targetNum)
    } else {
        return "没有匹配的表达式使之等于" + targetNum
    }
}
