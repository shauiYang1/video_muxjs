// const a = {
//   current:1,
//   valueOf () {
//       return this.current++;
//   }
// }

// if(a == 1 && a == 2 && a == 3) {
//   console.log(true)
// }

const a = {
  toString() {
    return '200'
  },
  valueOf() {
    return 100
  },
}

console.log(a + '3')

// 关于类型转换 处理 js 不同数据类型的表达式计算问题

var tempStr = "1";
var tempNum = 1;
var tempArr = [1, 2, 3];
var tempBool = false;
var tempObj = {
  name: "zhangsan",
  age: 18
};
var tempFunc = function () {}
var tempUndefined;
var tempNull = null;

console.log('tempStr', tempStr.valueOf(), tempStr.toString()) // 1 1
console.log('tempNum', tempNum.valueOf(), tempNum.toString()) // 1 1
console.log('tempArr', tempArr.valueOf(), tempArr.toString()) // [ 1, 2, 3 ] 1,2,3
console.log('tempBool', tempBool.valueOf(), tempBool.toString()) // false false
console.log('tempObj', tempObj.valueOf(), tempObj.toString()) // { name: 'zhangsan', age: 18 } [object Object]
console.log('tempFunc', tempFunc.valueOf(), tempFunc.toString()) // [Function: tempFunc] function () {}
// console.log('tempUndefined', tempUndefined.valueOf(), tempUndefined.toString()) // [Function: tempFunc] function () {}
// console.log('tempNull', tempNull.valueOf(), tempNull.toString()) // [Function: tempFunc] function () {}



// 转换规则
  /* 1.如果该值已经是原始数据类型（string、number、boolean），则直接返回该值。
  2.如果其中一项是字符串，那另一项值就会转换成对应的字符串类型。
  3.如果其中一项是对象，另一项值会先尝试调用valueOf方法，如果返回原始数据类型，则返回该值。否则调用toString方法，如果返回原始数据类型，则返回该值。
  4.如果 toString() 方法的返回结果不是原始数据类型，则抛出 TypeError 异常。 */

// 字符串同其他类型运算
/* console.log(tempStr + tempNum); //11
console.log(tempStr + tempArr); //11,2,3
console.log(tempStr + tempBool); //1false
console.log(tempStr + tempObj); //1[object Object]
console.log(tempStr + tempFunc); //1function () {} */

// number类型同其他类型运算
/* console.log(tempNum + tempStr); //11
console.log(tempNum + tempArr); //11,2,3
console.log(tempNum + tempBool); //1
console.log(tempNum + tempObj); //1[object Object]
console.log(tempNum + tempFunc); //1function () {} */

// array类型同其他类型运算
/* console.log(tempArr + tempStr); //1,2,31
console.log(tempArr + tempNum); //1,2,31
console.log(tempArr + tempBool); //1,2,3false
console.log(tempArr + tempObj); //1,2,3[object Object]
console.log(tempArr + tempFunc); //1,2,3function () {} */

// bool类型同其他类型运算
/* console.log(tempBool + tempStr); //false1
console.log(tempBool + tempNum); //1
console.log(tempBool + tempArr); //false1,2,3
console.log(tempBool + tempObj); //false[object Object]
console.log(tempBool + tempFunc); //falsefunction () {} */

// obj类型同其他类型运算
/* console.log(tempObj + tempStr); //[object Object]1
console.log(tempObj + tempNum); //[object Object]1
console.log(tempObj + tempArr); //[object Object]1,2,3
console.log(tempObj + tempBool); //[object Object]false
console.log(tempObj + tempFunc); //[object Object]function () {} */

// function同其他类型运算(同object对象)
/* console.log(tempFunc + tempStr); //function () {}1
console.log(tempFunc + tempNum); //function () {}1
console.log(tempFunc + tempArr); //function () {}1,2,3
console.log(tempFunc + tempBool); //function () {}false
console.log(tempFunc + tempObj); //function () {}[object Object] */

// null 或 undefined 与其他类型运算
/* console.log(null + tempStr); //null1
console.log(null + tempNum); //1
console.log(null + tempArr); //null1,2,3
console.log(null + tempBool); //0
console.log(null + tempObj); //null[object Object]
console.log(null + tempFunc); //nullfunction () {} */

/* console.log(undefined + tempStr); //undefined1
console.log(undefined + tempNum); //NaN
console.log(undefined + tempArr); //undefined1,2,3
console.log(undefined + tempBool); //NaN
console.log(undefined + tempObj); //undefined[object Object]
console.log(undefined + tempFunc); //undefinedfunction () {} */