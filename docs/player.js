const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function countup(){
  matches=matches+1;}

function actionAgainstCHOKI(){
  return GU;
}

function actionAgainstOmoteUra(){
  const remainder = matches % 2;
  if(remainder==0){
    return GU;
  }
  return PA;
}

function actionAgainstOmoteUra2(){
  const remainder = matches % 3;
  if(remainder==0){
    return CHOKI;
  }
  return GU;
}

function actionAgainstJunban(){
  const remainder = matches % 3;
  if(remainder==0){
    return CHOKI;
  }
  else if(remainder==1){
    return PA;
  }
  return GU;
}

//なんで動かないんだろうね？
function kirei(a){
  if(a==50){a=0;}
}

//"fighter::choki-lover", "fighter::odd-even", "fighter::on-third", "fighter::rotation", "fighter::fizzbuzz", "fighter::random"
function action(oppornent){
  let result = GU;
  countup();
   if(oppornent=="fighter::choki-lover"){
   result = actionAgainstCHOKI();}
  else if(oppornent=="fighter::odd-even")
   {result = actionAgainstOmoteUra();}
  else {if(oppornent=="fighter::on-third")
  {result = actionAgainstOmoteUra2();}
  else{result = actionAgainstJunban();}}
  kirei(matches);
console.log(matches);
return result;}