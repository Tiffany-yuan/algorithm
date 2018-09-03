// 给定一个数组，数组包含至少3个元素，所有元素均为整数，且所有元素符合：只包含一个偶数其余全部为奇数或只包含一个奇数其余全部为偶数，找出这个单独的偶数/奇数

function findoutLier(list) {
    let even = list.filter(a => a % 2 === 0)
    let odd = list.filter(a => a % 2 !== 0)
    return even.length === 1 ? even[0] : odd[0]
}