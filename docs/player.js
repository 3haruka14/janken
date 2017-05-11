const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function actionAgainstOmoteUra2(){
  matches = matches + 1;
  const remainder = matches % 3;
  const isEven = remainder == 0;
  if(remainder==0){
    return CHOKI;
  }
  return GU;
}

function action(oppornent)
{ let result =actionAgainstOmoteUra2();
return result;}