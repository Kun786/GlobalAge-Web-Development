


let checkIfIcanBuyCandy = (grade, moneyIHave) =>{
    if(priceOfProduct <= moneyIHave){
        return true;
    }else{
        return false;
    }
}

// console.log(checkIfIcanBuyCandy(550,100))


let checkMyResult = (math, english, science) =>{
    let result = 0
    if(math >= 50){
        // result = math+result;
        result += math;
    }if(english >=50 ){
        result += english;
    }if(science >= 50){
        result += science;
    }
    result
    let average = result/3;
    if(average >=60){
        return 'passed'
    }else{
        return 'failed'
    }
}

console.log(checkMyResult(45,60,60))




