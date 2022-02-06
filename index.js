// code your solution here

function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
const mondayWork = function (work="go to the office"){
    return (`This Monday, I will ${work}.`);
}

function wrapAdjective (something= "*"){
    return function(somethingElse = "special"){
        return (`You are ${something}${somethingElse}${something}!`);}
}