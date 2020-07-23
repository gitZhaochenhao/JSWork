//暴露出去一个对象
let obj = {
    name:'Tom',
    foo(){
        console.log(`模块一中的foo函数${this.name}`)
    },
    bar() {
        console.log(`模块一中的bar函数${this.name}`)
    }
}

module.exports = obj;