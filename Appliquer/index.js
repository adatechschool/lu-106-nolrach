function mainLoop(){
    for (let i = 0; i < 101; i++){
        fizzbuzz(i)
    }    
}
function fizzbuzz(number){
    if (number < 0 || number > 100 || typeof number != 'number' ){
        return "error"
    }
    else if (number %3 == 0 && number %5 != 0){
           return "fizz"
    }
    else if (number %5 == 0 && number %3 != 0){
        return "buzz"
    }
    else if (number %3 == 0 && number %5 == 0){
        return "fizzbuzz"
    }
   
    else if (number % 1 != 0){
        return "error"
    }
    else {
        return number.toString()
    }
}
  
     
module.exports = fizzbuzz;