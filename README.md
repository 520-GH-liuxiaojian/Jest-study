# Jest 测试



## 001 前端自动化测试产生的背景

作为一名前端开发人员 几乎每天都会遇到各种各样的 bug

+  安全
+ 逻辑
+ 性能
+ 展示

在日常的开发过程中 想要不出现 bug 几乎是不可能的

遭遇复杂的场景和对老代码进行更改的时候 产生 bug 是非常正常的

可怕的是我们将日常开发的 bug 带到了线上的正式环境 为了防止 bug 上线 我们通常都会对代码进行 相关的测试 代码的整合等技术降低代码执性过程中的产生的 bug 也可以通过灰度发布相关整体降低  bug  产生



**减少 bug 产生的方式方法**

+ **typescript**
+ **Flow**
+ **Eslint**
+ **stylelint**



也可以使用前端的 自动化的测试的工具 对整体的代码进行整体测试



自动化的测试代码 coding



实际的业务逻辑代码

```javascript
function add(first, second) {
    return first + second
}

function minus(first, second) {
    return first * second
}
```



测试文件代码

```javascript
let result = add(10, 20)
let expected = 30

if(result !== expected) {
    throw new Error(`10 + 20 预期结果是${expected}, 但是结果确是${result}`)
} else {
    console.log(`10 + 20 结果是${result}, 通过测试`)
}

// --------------------
let result = minus(10, 20)
let expected = -10

if(result !== expected) {
    throw new Error(`10 - 20 预期结果是${expected}, 但是结果确是${result}`)
} else {
    console.log(`10 - 20 结果是${result}, 通过测试`)
}
```

这样写测试文件呢 代码的重复性太高 如何进行简化呢

声明一个的专门函数进行处理测试

```javascript
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
```

但是这样写 测试的输入的结果的几乎都是一样的 如何在此进行深优化

```javascript
function test(descript, callback) {
    try {
        callback && callback()
    } catch(error) {
        console.error(descript + '没有通过测试,' + error)
    }
}
```

```javascript
test('测试 add 加法方法', () => {
    expect(add(10, 20)).toBe(30)
})

test('测试 minus 减法方法', () => {
    expect(minus(10, 20)).toBe(-10)
})
```



## 002 前端自动化的测试框架 Jest

前端自动化的测试中 如果只有的这两个方法是远远不够的 还需要许多许多新的特性的需要集成 前端的主流的测试框架

+ Jsmine
+ mocha
+ Jest
+ ...



**好的前端测试的框架 都应该具备以下条件**

+ 比较好的性能发挥 速度够快  API 足够简单 容易配置 执行单元测试的时候 隔离性比较好
+ 简单易用的功能
+ 易用性 监控模式 IDE 进行整合 快照功能 



## 003 Jest 安装

+ 安装 node 和 npm 
+ 初始化 node 管理项目目录
+ 将方法进行整体导出

```javascript
function add(first, second) {
    return first + second
}

function minus(first, second) {
    return first - second
}

module.exports = { add, minus }
```

+ 编写 以 test.js 文件结尾的文件

```javascript
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
```

+ 运行 **npx jest**

或者在 package.json 中 scripts 添加的运行命令

```json
 "scripts": {
    "test": "jest"
  },
```



