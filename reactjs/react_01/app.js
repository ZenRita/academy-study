/* 리액트의 구성 파트 */
//React.createElement(elementName, data, child);
//지금부터는 리액트를 사용하여 내부 구조를 형성하겠다는 의미
//elementName(요소명) : HTML 태그명인 'h1'과 같은 문자열 또는 컴포포넌트 객체를 넘겨줄 수도 있음
//data : 속성이나 상위 컴포넌트로부터 받은 값, null이나 {name:"홍길동"}과 같은 데이터 형태
//child : 요소 내부의 자식 위치에 들어갈 콘텐츠

/*리액트 렌더링 파트*/
//모든 구성이 종료되면
//ReactDOM.render(선언된 공간, 선택자);  ==> 위에서 구성된 필요 문서를 가져와서 지정된 장소에 넣는다.

//구성 파트
// const reactHello = React.createElement(
//     "h2", 
//     {className : "hello", name : "안녕 리액트"},
//     "Hello, ReactJS~~!!"
// );

//렌더링 파트
// ReactDOM.render(reactHello, document.getElementById("root"));

///구성과 렌더를 통한 헤더 공간 구성하기

//로고 a 공간 구성
const logo_a = React.createElement(
    "a", 
    {
        className : "text-white fs-5 d-block", 
        href : "./"
    },
    "BRAND"
);
const logo = React.createElement(
    "div",
    {className : "logo"},
    logo_a    
);


//메뉴 a 공간 구성
// - ABOUT 메뉴
const menu_a_1 = React.createElement(
    "a",
    {
        className : "text-secondary d-block", 
        href : "./about.html"
    },
    "ABOUT"
);
const menu_1 = React.createElement(
    "li",
    {className : "mx-3"},
    menu_a_1
);

// - PROJECT 메뉴
const menu_a_2 = React.createElement(
    "a",
    {
        className : "text-secondary d-block", 
        href : "./project.html"
    },
    "PROJECT"
);
const menu_2 = React.createElement(
    "li",
    {className : "mx-3"},
    menu_a_2
);

// - PORTFOLIO 메뉴
const menu_a_3 = React.createElement(
    "a",
    {
        className : "text-secondary d-block", 
        href : "./portfolio.html"
    },
    "PORTFOLIO"
);
const menu_3 = React.createElement(
    "li",
    {className : "mx-3"},
    menu_a_3
);


// - CONTACT 메뉴
const menu_a_4 = React.createElement(
    "a",
    {
        className : "text-secondary d-block", 
        href : "./contact.html"
    },
    "CONTACT"
);
const menu_4 = React.createElement(
    "li",
    {className : "mx-3"},
    menu_a_4
);

//ul 메뉴 공간
const ul_menu = React.createElement(
    "ul",
    {className : "d-flex"},
    menu_1, menu_2, menu_3, menu_4
);
//nav 공간
const nav_menu = React.createElement(
    "nav",
    null,  //값을 넣을 것이 없음을 표시
    ul_menu
);

//#wrap 공간
const wrap = React.createElement(
    "div",
    {
        className : "container h-100 d-flex justify-content-between align-items-center",
        id : "wrap"
    },
    logo, nav_menu
);

//header 공간
const header = React.createElement(
    "header",
    {
        className : "container-fluid bg-dark",
        id:"header"
    },
    wrap
);
//section1 공간
const section1 = React.createElement(
    "section",
    {
        id : "sec_01",
        className : "vh-100 bg-warning"
    },
    "Section_01 Space"
);
//footer 공간
const footer = React.createElement(
    "footer",
    {
        className : "bg-dark text-white py-3 text-center"
    },
    "Copyrights ⓒ React JS"
);

//web 공간
const web = React.createElement(
    "div",
    {className : "total"},
    header, section1, footer
)


ReactDOM.render(web, document.getElementById("root"));

