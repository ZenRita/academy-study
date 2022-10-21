/*
    [createElement()]
    #1. 첫번째 파라메터 => 태그명
    #2. 두번째 파라메터 => 태그 내부의 속성명으로 변경
    #3. 세번째 파라메터 => 모두 자식노드로 변경
*/
/*
    [JSX 문법 적용]
    createElement() ===> JSX로 수정
     - class => className, for => htmlFor, id => data-id
     - Javascript Expression => {}
     - 반드시 닫는 태그가 있어야 한다.
*/

/*일반적인 자바스크립트 적용시*/
// const title = "<h1 title='txtTitle'>My Title</h1>";
// console.log(title);

/*jsx 문법 적용시*/
const title = <h1 title='txtTitle'>My Title</h1>;
console.log(title);
const content = <p>콘텐츠 공간입니다.</p>;
console.log(content);

//createElement() 적용시
// const box = React.createElement(
//     "div",
//     {className : "col-4 card bg-dark text-white p-4"},
//     title, content
// );
// ReactDOM.render(box, document.querySelector("#root"));

//JSX 문법 적용시
// const box = (
//     <div className="col-4 card bg-dark text-white p-4">
//         {[title, content]}
//     </div>
// );
// ReactDOM.render(box, document.querySelector("#root"));

//자식 노드가 존재하는 경우, 변수를 별도로 만들기보다는 부모아래 자식노드를 JSX 문법으로 변경
// const box = (
//     <div className="col-4 card bg-dark text-white p-4">
//         <h1 title='txtTitle'>My Title</h1>
//         <p>콘텐츠 공간입니다.</p>
//     </div>
// );
// ReactDOM.render(box, document.querySelector("#root"));


//[JSX Expression을 활용하여 동적으로 표현방식으로 적용 : 변수는 {변수명} ]
// let strTitle = "txtTitle active";
// let strText = "리액트 좋아요~!";

// const box = (
//     <div className="col-4 card bg-dark text-white p-4">
//         <h1 title={strTitle}>My Title</h1>
//         <p>{strText}</p>
//     </div>
// );
// ReactDOM.render(box, document.querySelector("#root"));

//태그 내부에 속성값을 변경해야할 때는  ===>  <태그명 속성명={변수명}></태그명>
//태그 자식노드로 변동값을 주어야 할 때는  ==> <부모태그명>{변수명}</부모태그명>

const root = document.querySelector("#root");
//회원명단
const member = [
    {name: "유재석", age: "48", region : "서울"},
    {name: "지석진", age: "53", region : "경기"},
    {name: "전소민", age: "30", region : "인천"},
    {name: "하하", age: "40", region : "서울"},
];
let img2 = "./img/slide2.png";

const el = ( 
    <>
        {/* 주석 */}
        {/* JSX 최상위 root는 하나의 태그로만 구성된다. */}
        {/* JSX에서 표현식(삼항조건연산자(A < B ? true : false), map(), filter(), every, include, 배열함수메서드만 작성 가능) */}
        {/* JSX에서 표현식(변수선언 불가, if, for문 사용불가) */}
        <div>
            {/* 
            let img1 = "slide1.png";
            <img src="./img/"{img1}/> 
            */}
            
            <img src={img2}/>

            <ul>
                {member.map((v, i, a) => (
                    <li key={i}>
                        {v.name}
                        <span className="mx-3">|</span>
                        {v.age}세
                        <span className="mx-3">|</span>
                        ({v.region})
                    </li>
                ))}
            </ul>
        </div>
    </>

);

ReactDOM.render(el, root);


