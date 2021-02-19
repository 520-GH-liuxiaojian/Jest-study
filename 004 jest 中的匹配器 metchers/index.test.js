// test('测试 add 加法', () => {
//     // 期待一个值等于一个指定的值
//     // toBe 就是一个匹配器 相当于 === 不能比较对象 对象内存地址不一样
//     expect(10).toBe(10)
// })

// 匹配内容相等 对象的值相同 引用地址可以不同
// test('匹配对象值是否相等', () => {
//     const obj1 = { a: 1, b:2 }
//     expect(obj1).toEqual({ a: 1, b:2 })
// })

// 匹配一个值是不是 null  注意这里的值不可以为 undefined
// test('匹配对象值是否等于 null', () => {
//     const a = null
//     expect(a).toBeNull()
// })

// 匹配一个值是不是 undefined  注意这里的值不可以为 null
// test('匹配对象值是否等于 undefined', () => {
//     const a = undefined
//     expect(a).toBeUndefined()
// })

// 匹配一个值是否被定义过
// test('匹配一个值是否被定义过', () => {
//     const a;
//     expect(a).toBeDefined()
// })

// 匹配一个值是否为真
// test('匹配一个值是否为真', () => {
//     const a = 1
//     expect(a).toBeTruthy()
// })

// 匹配一个值是否为假
// test('匹配一个值是否为真', () => {
//     const a = 0
//     expect(a).toBeFalsy()
// })

// 取反匹配起
// test('匹配一个值是否为真', () => {
//     const a = 0
//     expect(a).not.toBeFalsy()
// })

// 数字匹配起
// 大于
// test('大于指定数子', () => {
//     const count = 10
//     expect(count).toBeGreaterThan(9)
// })

// test('小于指定数子', () => {
//     const count = 10
//     expect(count).toBeLessThan(11)
// })

// toBeGreaterThanOrEqual 大于等于指定数子
// toBeLessThanOrEqual 小于等于指定的数字
// test('大于等于指定数子', () => {
//     const count = 10
//     expect(count).toBeGreaterThanOrEqual(10)
// })

// test('测试小数', () => {
//     const count = .1
//     const second = .2
//     // expect(count + second).toEqual(.3)

//     // js 中 .1 + .2 会有小数溢出情况
//     // 推荐使用这个
//     expect(count + second).toBeCloseTo(.3)

// })

// 测试字符串
// 是否包含某个具体字符 toMatch
// test('是否包含某个具体字符', () => {
//     // 推荐使用这个
//     expect('http://www.baidu.com').toMatch('baidu')
// })

// 数组
// 是否包含某个具体片段
// test('是否包含某个具体片段', () => {
//     const arr = [1,3,4]
//     const newArr = new Set(arr)
//     expect(newArr).toContain(.3)
// })

// 异常
// const throwNewErrorFunc = () => {
//     throw new Error('this is error')
// }
// test('是否抛出异常', () => {
//     expect(throwNewErrorFunc).toThrow()
// })

// const throwNewErrorFunc = () => {
//     throw new Error('this is error')
// }
// test('是否抛出异常', () => {
//     expect(throwNewErrorFunc).toThrow('this is error')
// })

// https://jestjs.io/docs/en/expect
