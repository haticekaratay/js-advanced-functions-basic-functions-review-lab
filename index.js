function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
};
function mondayWork(activity ="go to the office"){
    return `This Monday, I will ${activity}.`
};

function wrapAdjective (flair= "*"){
    return function(str= "special"){
        return `You are ${flair}${str}${flair}!`
    }
};

const Calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
};

function actionApplyer(num,arr){
    if(arr.length === 0){
        return num
    }else{
        arr.forEach(f=>{
            num = f(num)
        })
    }
    return num;
}

// arrayOfTransforms = [
//     function(a){ return a * 2 },
//     function(a){ return a + 1000},
//     function(a){ return a % 7 }
//   ]

//   actionApplyer(13,arrayOfTransforms);