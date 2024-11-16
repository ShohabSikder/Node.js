const readline = require('readline');
const fs= require('fs');
const http= require('http');
const url= require('url');
const replaceHtml= require('./Modules/replaceHtml')

const html=fs.readFileSync('./template/index.html','utf-8')
const products=JSON.parse(fs.readFileSync('./Data/products.json','utf-8'))
let productListHtml=fs.readFileSync('./template/product-list.html','utf-8')
let productDetailsHtml=fs.readFileSync('./template/product-details.html','utf-8')


// let productHtmlArray=products.map((prod)=>{
//     let output=productListHtml.replace('{{%IMAGE%}}',prod.productImage);
//     output=output.replace('{{%NAME%}}',prod.name);
//     output=output.replace('{{%MODELNAME%}}',prod.modelName);
//     output=output.replace('{{%MODELNO%}}',prod.modelNumber);
//     output=output.replace('{{%SIZE%}}',prod.size);
//     output=output.replace('{{%CAMERA%}}',prod.camera);
//     output=output.replace('{{%PRICE%}}',prod.price);
//     output=output.replace('{{%COLOR%}}',prod.color);
//     output=output.replace('{{%ID%}}',prod.id);

//     return output;
// })

// function replaceHtml(template,product){
//     let output=template.replace('{{%IMAGE%}}',product.productImage);
//     output=output.replace('{{%NAME%}}',product.name);
//     output=output.replace('{{%MODELNAME%}}',product.modelName);
//     output=output.replace('{{%MODELNO%}}',product.modelNumber);
//     output=output.replace('{{%SIZE%}}',product.size);
//     output=output.replace('{{%CAMERA%}}',product.camera);
//     output=output.replace('{{%PRICE%}}',product.price);
//     output=output.replace('{{%COLOR%}}',product.color);
//     output=output.replace('{{%ID%}}',product.id);
//     output=output.replace('{{%ROM%}}',product.ROM);
//     output=output.replace('{{%DESC%}}',product.Description);

//     return output;
// }

//--------Create a server----------
// const server=http.createServer((request,response)=>{
//     // let x=url.parse(request.url,true);
//     // console.log(x);
//     // const path= request.url;
// // here pathname is coming from console.log after console.log command in terminal

//     let {query, pathname:path}=url.parse(request.url,true);
    
    
//     if(path ==='/' || path.toLocaleLowerCase()==='/home'){
//         response.writeHead(200,{
//             "content-type":'text/html',
//             "my-header": 'Hello, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}','Your are in Home page'));
//     }
//     else if( path.toLocaleLowerCase()==='/about'){
//         response.writeHead(200);
//         response.end(html.replace('{{%CONTENT%}}','Your are in About page'))
//     }
//     else if( path.toLocaleLowerCase()==='/contact'){
//         response.writeHead(200);
//         response.end(html.replace('{{%CONTENT%}}','Your are in Contact page'))
//      } 
//      else if( path.toLocaleLowerCase() ==='/products'){
//         if(!query.id){
//         let productHtmlArray=products.map((prod)=>{
//             return replaceHtml(productListHtml,prod);
//         })    
//         let productListResponse=html.replace('{{%CONTENT%}}',productHtmlArray.join(','))
//         response.writeHead(200,{"Content-Type" : "text/html"});
//         response.end(productListResponse);
//         // console.log(productListResponse);
//         }
//         else{
//             let prod=products[query.id]
//             let productDetailResponse=replaceHtml(productDetailsHtml,prod)
//             response.end(html.replace('{{%CONTENT%}}',productDetailResponse));
//         }
        
//     } 
//     else{
//         response.writeHead(404);
//         response.end(html.replace('{{%CONTENT%}}','Error 404 : Page not found'))
//     }
// });

//Setver inherits from eventemitter
const server=http.createServer();
server.on('request',(request,response)=>{
    let {query, pathname:path}=url.parse(request.url,true);
    
    
    if(path ==='/' || path.toLocaleLowerCase()==='/home'){
        response.writeHead(200,{
            "content-type":'text/html',
            "my-header": 'Hello, world'
        });
        response.end(html.replace('{{%CONTENT%}}','Your are in Home page'));
    }
    else if( path.toLocaleLowerCase()==='/about'){
        response.writeHead(200);
        response.end(html.replace('{{%CONTENT%}}','Your are in About page'))
    }
    else if( path.toLocaleLowerCase()==='/contact'){
        response.writeHead(200);
        response.end(html.replace('{{%CONTENT%}}','Your are in Contact page'))
     } 
     else if( path.toLocaleLowerCase() ==='/products'){
        if(!query.id){
        let productHtmlArray=products.map((prod)=>{
            return replaceHtml(productListHtml,prod);
        })    
        let productListResponse=html.replace('{{%CONTENT%}}',productHtmlArray.join(','))
        response.writeHead(200,{"Content-Type" : "text/html"});
        response.end(productListResponse);
        // console.log(productListResponse);
        }
        else{
            let prod=products[query.id]
            let productDetailResponse=replaceHtml(productDetailsHtml,prod)
            response.end(html.replace('{{%CONTENT%}}',productDetailResponse));
        }
        
    } 
    else{
        response.writeHead(404);
        response.end(html.replace('{{%CONTENT%}}','Error 404 : Page not found'))
    }
});
//--------Start the server----------
server.listen(4000,'localhost',()=>{
    console.log('Server has started');
    
});