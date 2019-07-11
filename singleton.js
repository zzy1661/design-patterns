/**
 * 单例模式：懒惰单例
 * 关键api：getInstance
 * 关键思路：静态属性或者闭包保存实例
 * 
 */
/**
 * demo1
 */
class Single1 {
    static instance = null;
    /**
     * 可以通过修改construct返回单例
     */
    constructor(name){  
        // 透明单例
        // if(!Single1.instance) {
            this.name = name;
        //     Single1.instance = this
        // }     
        // return Single1.instance
    }
    
    /**
     * 可以通过静态方法
     * @param {*} args 
     */
    static getInstance(args) {
        // 此处的this是Single1
        if(!this.instance) {
           this.instance = new Single1(args);
        }
        return this.instance
    }
    /**
     * 使用闭包
     */
    static getSingle = (()=>{
        var instance = null;
        return function(args){
            if(!instance) {
                instance = new Single1(args);
            }
            return instance;
        }
    })()
    getName() {
        console.log(this.name)
    }
}
var a = new Single1('a'),b=new Single1('b')
console.log(a===b)
var a =  Single1.getInstance('a'),b= Single1.getInstance('b')
console.log(a===b)
var a =  Single1.getSingle('a'),b= Single1.getSingle('b')
console.log(a===b)