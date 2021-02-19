const { add, minus } = require('./index')

test('测试 add 加法', () => {
    expect(add(10, 20)).toBe(30)
})

test('测试 minus 减法方法', () => {
    expect(minus(10, 20)).toBe(-10)
})

// jest 测试时候的完成是两个
// 单元测试 测试单个的模块
// 集成测试 多个模块测试
