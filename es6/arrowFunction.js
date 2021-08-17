// es5 함수 선언문
function sum(a, b) {
  return a + b;
}

// es5 함수 표현식
var sum = function (a, b) {
  return a + b;
};

// es6+  함수 표현식 - function 키워드 대신 => 화살표 키워드 추가
// 화살표 함수
var sum = (a, b) => {
  return a + b;
};

var sum = (a, b) => a + b;

// ts 화살표 함수 타이핑
// var sum = (a: number, b: number): number => {
//   return a + b;
// };
