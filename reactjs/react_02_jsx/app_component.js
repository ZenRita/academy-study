//vue js에서는 컴포넌트를 연결시 <Header-el>
//React.Componet에서는 지정된 장소를 대문자로 시작을 구성. 소문자로 시작되었다면 일반적인 태그로 인식을 함

console.log(React.Component);
//DOM으로 접근하는 문서의 위치를 지정
const root = document.querySelector("#root");

//1. Class로 컴포넌트 구성(React 16버전 (2019년 9월 이전) 이하에서 사용)
class Hello1 extends React.Component {
    render(){
        const userName = "BTS";
        return <h3>Hello, {userName}</h3>
    }
}
//2. hooks(함수형)로 Component 구성(React 17버전 (2019년 9월 이전))
const Hello2 = () => {
    const userName = "아이유";
    return <h3>Hello, {userName}</h3>;
}

//콘텐츠 공간 구성
const Context1 = () => {
    const section1_arr = [
        ["./img/f1.jpg", "Photo-1"],
        ["./img/f2.jpg", "Photo-2"],
        ["./img/f3.jpg", "Photo-3"],
        ["./img/f4.jpg", "Photo-4"],
        ["./img/f5.jpg", "Photo-5"],
        ["./img/f6.jpg", "Photo-6"],
    ];
    return (
        <>
            <div className="pt-5">
                <div className="container">
                    <h2 className="text-center text-info">Best Item</h2>
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center">
        {/* 반복구문시작 */}
                        {section1_arr.map((v, i) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <img className="w-100" src={v[0]} alt={v[1]} title={v[1]} />
                            </div>
                        ))}
        {/* 반복구문종료 */}
                    </div>
                </div>
            </div>
        </>
    );
}

const el = (
    <>
        <Hello1 />
        <Hello2 />
        <Context1 />
    </>
);
ReactDOM.render(el, root);


