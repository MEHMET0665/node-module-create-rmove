const fs=require('fs')
//fs.appendFile()   fs.writeFile()

fs.writeFile('demoNew.txt','Hello World\n',(error)=>{
  if (error){
    console.log(error)
  }
  console.log('Append Process finished...')
})