/*
 Reading & Writing files asynchronously
*/

const readline = require('readline');
const fs= require('fs');
const { error } = require('console');

fs.readFile('./File/start.txt','utf-8', (error,data1)=>{
    console.log(data1);

    fs.readFile(`./File/${data1}.txt`,'utf-8',(error2,data2)=>{
        console.log(data2);
        fs.readFile('./File/append.txt','utf-8',(error3,data3)=>{
            console.log(data3);
            fs.writeFile('./File/output.txt',`${data2}\n\n${data3}\n\nDate created ${new Date()}`,()=>{
                console.log("File return successfully");
                
            })
            
        })
    })
})

