
/***prod api heroku***/
//let ipUrl="https://project-blog-service.herokuapp.com/blog/";

/***prod api aws***/
let ipUrl="http://blogservice-env.eba-iz3rabdz.us-east-1.elasticbeanstalk.com/blog/";

/***dev api***/
//let ipUrl="http://localhost:8080/blog/";

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  apiurl-home page
    getArticleById:ipUrl + 'getArticleById/',  // apiurl-detailed,need reciece id
    getTypeInfo:ipUrl + 'getTypeInfo',  // apiurl-heade nav info(article types)
    getListById:ipUrl + 'getListById/',  // apiurl-get article list by type id

}

export default servicePath;

