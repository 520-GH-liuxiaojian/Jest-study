import Counter from './Counter'

let counter = null

// 在所有测试的用例运行之前就会执行
// beforeAll(() => {
//     // counter = new Counter()
// })

// 每个的测试的用例的执行之前都会执行
beforeEach(() => {
    counter = new Counter()
})

// // 每个测试用例执行完成之后就会执行
// afterEach(() => {})

// // 在所有的测试用例运行完成之后就会执行
// afterAll(() => {})

// // 这里的测试的用例相互影响 没有隔离 独立性较低
// test('测试 Counter 中的 addOne', () => {
//     counter.addOne()
//     expect(counter.number).toBe(2)
// })

// test('测试 Counter 中的 minusOne', () => {
//     counter.minusOne()
//     expect(counter.number).toBe(1)
// })

// 分组
describe('测试 Counter 类中的方法', () => {
    
    describe('测试增加的相关的代码', () => {
        test('测试 Counter 中的 addOne', () => {
            counter.addOne()
            expect(counter.number).toBe(2)
        })
    
        test('测试 Counter 中的 addTwo', () => {
            counter.addTwo()
            expect(counter.number).toBe(3)
        })
    })
    
    describe('测试减少相关的代码', () => {
        test('测试 Counter 中的 addOne', () => {
            counter.minusOne()
            expect(counter.number).toBe(0)
        })
    
        test('测试 Counter 中的 addTwo', () => {
            counter.minusTwo()
            expect(counter.number).toBe(-1)
        })
    })
})
