// let result = add(10, 20)
// let expected = 30

// if(result !== expected) {
//     throw new Error(`10 + 20 预期结果是${expected}, 但是结果确是${result}`)
// } else {
//     console.log(`10 + 20 结果是${result}, 通过测试`)
// }

// let result = minus(10, 20)
// let expected = -10

// if(result !== expected) {
//     throw new Error(`10 - 20 预期结果是${expected}, 但是结果确是${result}`)
// } else {
//     console.log(`10 - 20 结果是${result}, 通过测试`)
// }

// 不管通过与否 输出的结果都是一样的 还需要持续优化
function expect(result) {
    return {
        toBe(actual) {
            if(actual !== result) {
                throw new Error(`预期值和实际值不相等 预期是${actual}, 结果确是${result}`)
            }
        }
    }
}

function test(descript, callback) {
    try {
        callback && callback()
    } catch(error) {
        console.error(descript + '没有通过测试,' + error)
    }
}

// 如何整合资源测试代码文件
// expect(add(10, 20)).toBe(30)
// expect(minus(10, 20)).toBe(-10)

test('测试 add 加法方法', () => {
    expect(add(10, 20)).toBe(30)
})

test('测试 minus 减法方法', () => {
    expect(minus(10, 20)).toBe(-10)
})