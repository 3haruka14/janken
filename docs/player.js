const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;
function action(oppornent){
  matches = matches + 1;
  const remainder = matches % 3;
  const isEven = remainder == 0;
  console.log(`${matches} % 3 = ${remainder} : ${isEven}`);
  if(remainder==0){
    return CHOKI
  }
  return GU;
}