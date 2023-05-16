// const student = {
  
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// };

// delete student.rollno;

// console.log(student);


// const pi = 3.142;

// 


// function bool(number){
        
//         5/number == 1;
// }

// console.log(Boolean(bool(5)));


// function type(){
//     let first_name = prompt("Enter your name");
//     let age = prompt("Enter your age");


//       return first_name;
// }

// console.log(type(typeof first_name));


// 


// function argument(args){
       
//         let bytd = typeof args

//         return bytd

// }

// console.log(argument("retfd"))


// const d = new Date(2018, 11, 24, 10, 33, 30, 0)

// console.log(d)

//search method

// let text = 'The rain in SPAIN stays mainly in the plain'

// let position = text.search('ain')
// let position = text.search(/ain/)
// let position = text.search(/AIN/)
// let position = text.search(/AIN/i)
// let position = text.search(/w/)


// console.log(position)




//slice method

// const s = "The morning is upon us"

//  let position = s.slice(let position = s.slice(-11)12)

//  let position = s.slice(23)

// let position = s.slice(13,16)
// let position = s.slice(16,13)  
// let position = s.slice(-8,-4)
// //In this case position 4 is greater than position - 8
//  let position = s.slice(-8,4) 
// console.log(position)






  

// function anagrams(string1 , string2){

//      const a = string1.toLowerCase().split('').sort().join(''); 
//      const b = string2.toLowerCase().split('').sort().join('');
     
     
//      if(a===b){
//         console.log("Words are anagrams")
//      }else{
//         console.log("Words are not anagrams")
//      }

// }

// console.log(anagrams('Busolo', 'Silent'))





function palindrome(enterWord){
    
    const splitWord = enterWord.split('')

  const reverseSplitWord = splitWord.reverse()


  const joinReverseSplitWords = reverseSplitWord.join('')


  if(joinReverseSplitWords===enterWord){
    return ("Correct, your word is a palindrome")
  }else{
    return ("Try again to guess a palindrome")
  }



}

const enter = prompt("Enter a word you think is a palindrome")


console.log(palindrome(enter))
