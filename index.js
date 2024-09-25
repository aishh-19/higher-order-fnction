const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];

  //Reduce//
  let obj = strings.reduce((acc , fruit)=>{
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc ;
  },{})
  console.log(obj)


  const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
let sum = numbers.reduce((acc , curr) =>{
    if(curr%3 === 0 || curr % 5 === 0){
        return acc + curr;
    }
    return acc;
} , 0)

console.log(sum)

//filter//
const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];

  let palindrom = words.filter(word =>{
    const reversed = word.split('').reverse().join('')
    if(word == reversed){
        return word ; 
    }
  }

  )
  console.log(palindrom);


  