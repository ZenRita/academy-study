//상세 페이지에서 꼬깔콘 2봉지를 선택 후 장바구니 버튼을 클릭했다면 -> 장바구니로 이동 -> [장바구니 페이지]에서는 꼬깔콘 2봉지가 표현되어야 함
//서로 다른 페이지가 어떤 지정된 상태를 공유하는 중

//props의 역할은 상태정보를 갖고 있다면 이 상태 정보를 다른 컴포넌트가 공유하고자 할 때 전달자의 역할을 담당
//props는 위(상위 부모)에서 아래(자손 또는 자식)로 흐른다. => 부모가 자식에게 전달 가능한 데이터

const root = document.querySelector("#root");

//#2. 자식 영역으로 상위로부터 전달 받은 데이터 값을 활용
// const StudentScore = (props) => {
//     console.log(props);  //{name: '안재욱', title: '시험 성적', mathScore: '95', korScore: '75', engScore: '80'}
//     return (
//         <>
//             <div>{props.name} 학생의 {props.title}</div>
//             <div>{props.name} 학생의 수학시험성적 {props.mathScore}점</div>
//             <div>{props.name} 학생의 국어시험성적 {props.korScore}점</div>
//             <div>{props.name} 학생의 영어시험성적 {props.engScore}점</div>
//         </>
//     );
// }

//#1. 상위 부모영역에 props를 등록. 하위 컴포넌트인 전달자 역할
// const App = (props) => (
//     <StudentScore name="안재욱" title="시험 성적" mathScore="95" korScore="75" engScore="80"></StudentScore>
// );

//#3. 돌려 받은 값을 지정한 장소에 넣는다.
//ReactDOM.render(<App/>, root);



//고정형 데이터가 아닌 배열형 데이터도 처리가능
const classScore = [
    ["혜리", 45, 65, 85],
    ["보검", 95, 75, 65],
    ["경표", 95, 90, 95],
    ["동휘", 35, 45, 75],
    ["재열", 90, 95, 90],
];

const StudentScore = (props) => {
    console.log(props);
    return (
        <>
            <div>{props.name} 학생의 {props.title}</div>
            <div>{props.name} 학생의 수학시험성적 {props.mathScore}점</div>
            <div>{props.name} 학생의 국어시험성적 {props.korScore}점</div>
            <div>{props.name} 학생의 영어시험성적 {props.engScore}점</div>
            <hr />
        </>
    );
}

const App = (props) => (
    <>
        {classScore.map((v,i)=> (
            <StudentScore name={v[0]} title="시험 성적" mathScore={v[1]} korScore={v[2]} engScore={v[3]} key={v[0]} />
        ))}
    </>
);
ReactDOM.render(<App/>, root);


