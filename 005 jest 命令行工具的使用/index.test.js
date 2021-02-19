const throwNewErrorFunc = () => {
    throw new Error('this is error')
}
test('是否抛出异常', () => {
    expect(throwNewErrorFunc).toThrow('this is error')
})

// https://jestjs.io/docs/en/expect
