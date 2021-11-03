// 変数
let unko = 'hellow world!';
// unko = 'hello world2!';
// console.log(unko);

// 定数(書き換えはできない)
const bigUnko = 'he hell hello world'
// console.log(bigUnko);

// 配列
let inoki = ['いーち', 'にー', 'さん', 'だー'];
// console.log(inoki[0]);

// ループ
let index = 0
while(index < inoki.length){
  console.log(inoki[index]);
  index++;
}

// if else
// if(inoki.length == 3){
//   console.log('yaer')
// }else{
//   console.log('faewfeawfaew')
// }

// 関数
const test = (arg) => {
  // 実行したい内容を記載する
  if(inoki.length == arg){
    console.log('yaer')
  }else{
    console.log('faewfeawfaew');
  }
};

// 関数呼び出し
test(4);
test(0);

// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  smel: 'mint',
  goToTilet: () => {
    console.log('index');
  }
};

console.log(unko2)
window.alert('test')
