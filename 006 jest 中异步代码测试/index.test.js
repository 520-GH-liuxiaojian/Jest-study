import { fetchData } from './index'

// 异步代码的测试方式一 done
// test('测试返回值', done => {
//     // 因为这里是异步函数的 这里没有执行则代表就会通过测试
//     // test 可以接受一个参数 这个参数的是一个的函数
//     // 如果没有调用 done 则代表没有执行完成内部函数
//     fetchData(data => {
//         expect(data).toEqual({ success: true })
//         done()
//     })
// })

// 异步代码测试的方式二 异步代码直接返回 promise
// test('测试返回值', () => {
//     // 测试异步代码在这里需要直接返回
//     return fetchData().then(result => {
//         expect(result.data).toEqual({ success: true })
//     })
// })

// 测试返回的结果为 404
// test('测试返回值 404', () => {
//     // 判断 expect 直接调用的次数 参数就是 expect 调用的次数
//     // 如果没有达到预期值 就是就会提示测试不会通过
//     expect.assertions(1)
//     return fetchData().catch(error => {
//         expect(error.toString().indexOf('404') > -1).toBeTruthy()
//     })
// })

// 测试 fetchData 返回的结果为 { success: true }
// test('测试返回值 { success: true }', () => {
//     const result = {
//         data: {
//             success: true
//         }
//     }
//     return expect(fetchData()).rejects.toThrow(result)
// })

// 使用 async await 进行代码异步测试
// test('测试返回值的 { success: true }', async () => {
//     expect.assertions(1)
//     try {
//         await fetchData()
//     } catch(error) {
//         expect(error.toString()).toBe('Error: Request failed with status code 404')
//     }
// })

