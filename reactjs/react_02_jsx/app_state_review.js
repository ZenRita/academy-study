const {useState} = React;
const root = document.querySelector("#root");

const App = () => {
    //메서드 파트(옵션)
    //true와 false라는 boolean 통제
    const [isBool, setIsBool] = useState(true);
    console.log(isBool);

    const changeBool1 = () => {
        setIsBool(true);
    }
    const changeBool2 = () => {
        setIsBool(false);
    }

    //렌더링 파트
    return (
        <>
            <div className="tab_space">
                <ul className="tab_btn_group d-flex">
                    <li className="tab_btn" data-key="1">
                        <button className="btn btn-primary" onClick={changeBool1}>Image1</button>
                    </li>
                    <li className="tab_btn" data-key="2">
                        <button className="btn btn-primary" onClick={changeBool2}>Image2</button>
                    </li>
                </ul>
                <div className="tab_cont_space">
                    {/* 삼항조건연산자(논리형조건식 ? true : false)를 사용하여 보여주고 감추기 */}
                    {isBool ? 
                    <div className="tab_cont1">
                        <img className="w-50" src="./img/team1.jpg" />
                        <img className="w-50" src="./img/team2.jpg" />
                    </div>
                    :
                    <div className="tab_cont2">
                        <img className="w-50" src="./img/team3.jpg" />
                        <img className="w-50" src="./img/team4.jpg" />
                    </div>
                    }
                </div>
            </div>

        </>
    );

}
ReactDOM.render(<App />, root);


