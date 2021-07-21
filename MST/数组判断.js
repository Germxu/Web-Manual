let arr = []

1.  instanceof 

    arr  instanceof Array

2. __proto__

    arr.__proto__  === Array.prototype

3. constructor

    arr.constructor === Array

4. Object.prototype.toString

   Object.prototype.toString.call(arr) === '[object Array]'

5. Array.isArray

    Array.isArray(arr)

// 其中方法1，2，3 主要是通过原型去判断的， 4是通过object类型的副属性class去判断的，其中函数的class是Function，结果是[object Function]， 普通的对象是Object，结果是[object Object]，5是es6新增的方法


// ES6 isArray polyfill
if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }


  function _isArray(arg){
      Object.prototype.toString.call(arg)==='[object Array]'
    }
    Object.prototype.toString.call(arg)==="[object Function]"