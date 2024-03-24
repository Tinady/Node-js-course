const fs= require('fs')

// fs.readFile("./blog.txt", (err, data)=>
// {
//     if(err){
//         console.log(err)
//     }

//     console.log(data.toString())
// })


// console.log("hi")


// fs.writeFile("./blog2.txt", "hi", ()=>{
//     console.log('file is overwritten')
// }
// )

// if(fs.existsSync('./assets')){
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('deleted')


// })

// }
// else{
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
// })


// }


if(fs.existsSync('./blog2.txt')){
    fs.unlink('./blog2.txt', (err)=>{
        if(err){
            console.log(err)
        }

        console.log("deleted")
    })
}


