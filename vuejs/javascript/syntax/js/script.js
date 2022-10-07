//2차 배열의 데이터 패턴 : 
//["이미지 파일명", "내부 타이틀명"]
const box_arr = [
    ["img_01.jpg", "Port-1"],
    ["img_02.jpg", "Port-2"],
    ["img_03.jpg", "Port-3"],
    ["img_04.jpg", "Port-4"],
    ["img_05.jpg", "Port-5"],
    ["img_06.jpg", "Port-6"],
    ["img_07.jpg", "Port-7"],
    ["img_08.jpg", "Port-8"],
    ["img_09.jpg", "Port-9"],
    ["img_10.jpg", "Port-10"],
    ["img_11.jpg", "Port-11"],
    ["img_12.jpg", "Port-12"],
];

//DOM 패턴 + 반복문(일반 for문, for~in, for~of, forEach.....map)
let $bongdari = "";  //각 분기점의 패턴을 담을 곳
for(v of box_arr){
    console.log(v);
    //A+=B ==> A = A + B (복합대입연산자)
    $bongdari += `
    <div class="box" style="background-image:url(./img/${v[0]})">${v[1]}</div>
    `;
    console.log($bongdari);
}


//DOM의 기준(부모영역)으로 반복문 형태를 자식의 위치에 배치한다.
const mainWrap = document.querySelector("main .wrap");
console.log(mainWrap);

mainWrap.innerHTML = $bongdari;