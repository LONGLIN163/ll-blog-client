//let ipUrl="http://127.0.0.1:8081/blog/";
let ipUrl="https://node-express-env.eba-5squvtpz.us-east-2.elasticbeanstalk.com/blog/";

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  apiurl-home page
    getArticleById:ipUrl + 'getArticleById/',  // apiurl-detailed,need reciece id
    getTypeInfo:ipUrl + 'getTypeInfo',  // apiurl-heade nav info(article types)
    getListById:ipUrl + 'getListById/',  // apiurl-get article list by type id

}
export default servicePath;

