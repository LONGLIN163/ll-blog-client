
let ipUrl="https://project-blog-service.herokuapp.com/blog/";

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  apiurl-home page
    getArticleById:ipUrl + 'getArticleById/',  // apiurl-detailed,need reciece id
    getTypeInfo:ipUrl + 'getTypeInfo',  // apiurl-heade nav info(article types)
    getListById:ipUrl + 'getListById/',  // apiurl-get article list by type id

}
export default servicePath;

