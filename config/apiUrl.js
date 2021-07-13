let ipUrl="http://127.0.0.1:7001/blog/";

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  apiurl-home page
    getArticleById:ipUrl + 'getArticleById/',  // apiurl-detailed,need reciece id
    getTypeInfo:ipUrl + 'getTypeInfo',  // apiurl-heade nav info(article types)
    getListById:ipUrl + 'getListById/',  // apiurl-get article list by type id

}
export default servicePath;

