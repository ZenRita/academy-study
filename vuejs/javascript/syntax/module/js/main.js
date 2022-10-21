// library1.js에서 필요한 데이터를 가져온다.
import {greet, sumNum } from "./library1.js";

console.log(`${greet}`);
console.log(sumNum(6, 10));

import {greet2} from "./library1.js";
console.log(`${greet2}`)

import {hero1, hero2} from "./library2.js";
console.log(hero1);
console.log(hero1.name);
console.log(hero1.level);
console.log(hero1.device);
console.log(hero2);
console.log(hero2[1]);

// library.js에서 선언한 모든 식별자를 가져오기
import * as everyThing from './library2.js';
console.log(everyThing);
console.log(everyThing.hero1);
console.log(everyThing.hero2);

// library3.js에서 필요한 데이터 가져오기
import sumNum3 from "./library3.js";
console.log(sumNum3(1, 2));