//state는 컴포넌트 본인이 갖고 있는 값
//변화가 필요한 경우 setState() 함수를 통해 기존의 값을 변경 할 수 있음
const root = document.querySelector("#root");


//****클래스 함수를 적용****//
//함수 파트, 렌더링 파트
/*
class Counter extends React.Component{
    //상품의 최초 수량을 설정
    state = {
        number : 1
    };

    //우선자 설정
    plus = () => {
        // console.log(this);  //Counter
        // console.log(this.state);  //{number : 1}
        // console.log(this.state.number);  //1
        this.setState({
            number : this.state.number + 1
        });
    }

    //우선자 설정(조건 : 최소 수량이 1 ==> 입력상자 내부의 value 값이 1인 경우, 추가 클릭시 alert창에 "최소 수량은 1입니다." 띄운다)
    minus = () => {
        if(this.state.number < 2){
            this.setState({
                number : this.state.number
            });
            alert("최소 수량은 1입니다.");
        }else{
            this.setState({
                number : this.state.number - 1
            });
        }
    }

    render() {
        const {number} = this.state;
        console.log(number);
        return (
            <>
                <div className="col-lg-4 d-flex justify-content-center align-items-center py-4 mx-auto">
                    <div className="form-control form-text text-center">
                        <label className="my-4">상품수량</label>
                        <div className="input-group form-text d-flex justify-content-center">

                            <button className="btn btn-secondary" onClick={this.plus}>＋</button>

                            <input className="input-group-text" type="number" value={number} />
                            
                            <button className="btn btn-secondary" onClick={this.minus}>－</button>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}
class App extends React.Component{
    render() {
        return <Counter/>
    }
}
*/

//***useState()와 hook 이라는 함수 적용***//
//useState : 현재 상태와 앞으로 변경되게 할 과정을 구성
const {useState} = React; //React에서 제공하는 상태관리 함수 메서드
const App = () => {
    //메서드 파트
    const [num, setNum] = useState(1);
    console.log(num);  //1

    const plus = () => {
        console.log("+버튼 클릭");
        setNum(num+1);
    }
    const minus = () => {
        console.log("+버튼 클릭");
        if(num < 2){
            alert("최소 수량은 1입니다.");
        }else{
            setNum(num-1);
        }
    }

    //렌더링 파트
    return (
    <>
        <div className="col-lg-4 d-flex justify-content-center align-items-center py-4 mx-auto">
            <div className="form-control form-text text-center">
                <label className="my-4">상품수량</label>
                <div className="input-group form-text d-flex justify-content-center">

                    <button className="btn btn-secondary" onClick={plus}>＋</button>
                    <input className="input-group-text" type="number" value={num} />
                    <button className="btn btn-secondary" onClick={minus}>－</button>

                </div>
            </div>
        </div>
    </>
    );
}

ReactDOM.render(<App/>, root);


