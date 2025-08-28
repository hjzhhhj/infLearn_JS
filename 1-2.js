// // 변수 선언과 할당
// let name;
// name = "효빈";

// console.log(name); // 효빈

// // 변수 값 재할당
// let name = "효빈";
// name = "hyobin";

// console.log(name); // hyobin

// // 변수 명명 규칙 - $, _ 허용 / 다른 기호 불가
// let $name;
// let my_name;

// let name^;   // ❌ Uncaught SyntaxError: Unexpected token '^'
// let my*name; // ❌ Uncaught SyntaxError: Unexpected token '*'

// // 변수 명명 규칙 - 숫자 맨 앞에 불가
// let 1st;       // ❌ Uncaught SyntaxError: Invalid or unexpected token
// let user1;
// let te123st;

// // 변수 명명 규칙 - 예약어 불가
// let var; // ❌ Uncaught SyntaxError: Unexpected token 'var'
// let if;  // ❌ Uncaught SyntaxError: Unexpected token 'if'

// // 긴 변수명 (가독성 ↓)
// let userinfo;
// let istrueorfalse;

// // 카멜 표기법 (Camel Case, 가독성 ↑)
// let userInfo;
// let isTrueOrFalse;

// // 상수(const) 선언 후 값 변경 시 오류
// const name = "효빈";
// name = "hyobin"; // ❌ TypeError: Assignment to constant variable.

// console.log(name);

// // 변경 불가능한 값 저장 (생일, 이름 등)
// const birthday = "12-21";
// const name = "hyobin";

// 상수를 별칭(대문자 네이밍)으로 활용
const EMAIL_ADDRESS = "hbin12212@gmail.com";
const PROFILE_URL = "https://hyobb.com";
