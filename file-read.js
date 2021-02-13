const fs=require('fs');
//Arrow function =>(){}
fs.readFile('demo.txt',(error,data)=>{
  if(error){
    console.log(error);
  }
  console.log(data.toString());
})
console.log('end')