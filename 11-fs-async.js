const {readFile, writeFile} = require('fs');

console.log('Starting')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt','This is inserted from the file no 11',(err,result)=>{
            if(err){
                return;
            }
            console.log("Done with this task")
        })
    })
})
console.log("Starting next task...")