let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];
let objKeys = [];

function exampleOne(object, array) {
  // basic 객체의 children 속성이 null인지 판별하고
  // null일 경우 매개변수를 할당한다
  dataCheck(object, array);
  
  // header, main, footer HTML 태그를 생성하는 로직으로
  // 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하시오.
  let value = tagCreate(objKeys, object);
  return value;
}

console.log(exampleOne(basicData, elementData));

// 데이터 타입이 null인지 판별하고 null일 경우 매개변수를 할당하는 함수
function dataCheck(object, array) {
  let cnt = 0;
  for(key in object) {
    objKeys.push(key);
    if(object[key].children === null) {
      object[key].children = array[cnt];
      cnt += 1;
      // console.log(objKeys);
    } else {
      console.error("데이터 타입이 null이 아닙니다")
    }
    // console.log(object);
    // console.log(object[key])
  }
  return object;
}

// dataCheck(basicData, elementData);
// console.log(objKeys)

// HTML 태그를 생성하는 함수
function tagCreate(array, object) {
  // console.log(object)
  let tag = '';
  for(let i = 0; i < array.length; i++) {
    tag += `<${array[i]}>${object[array[i]].children}</${array[i]}>`
  }
  return tag;
}

// console.log(tagCreate(objKeys, elementData));