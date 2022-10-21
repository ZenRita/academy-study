//메뉴 패턴(2차 배열) : ["메뉴명칭", "URL 경로"]
const menu_arr = [
    ["About", "/about"],
    ["Project", "/project"],
    ["Portfolio", "/portfolio"],
    ["Contact", "/contact"],
];

const headerEl = (
    <header className="container-fluid bg-light border-bottom">
        <div className="container h-100 d-flex justify-content-between align-items-center">
            <div className="logo">
                <a href="/">
                    <img className="d-block" src="./img/logo.png" alt="로고" />
                </a>
            </div>
            <nav>
                <ul className="d-flex">
                    {menu_arr.map((v, i) => (
                        <li className="mx-3" key={i}>
                            <a className="text-secondary" href={v[1]}>{v[0]}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

const section1_arr = [
    ["./img/f1.jpg", "Photo-1"],
    ["./img/f2.jpg", "Photo-2"],
    ["./img/f3.jpg", "Photo-3"],
    ["./img/f4.jpg", "Photo-4"],
    ["./img/f5.jpg", "Photo-5"],
    ["./img/f6.jpg", "Photo-6"],
];
const section1El = (
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
    
);

ReactDOM.render(headerEl, document.querySelector("#header"));
ReactDOM.render(section1El, document.querySelector("#section1"));

