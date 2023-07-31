function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    return returnFunction = x=>x+1
}

function returnsAnAnonymousFunction (){
    return function (){console.log("hi")}
} 