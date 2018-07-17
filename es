var http = require(http);

/**
 * Simple wrapper of the AWS/es server's API
 * @class Sqs
 * @constructor
 * @param {Object}  config: configuration account
 */
function Es(dto){

    this.awsAccessKey = (dto && dto.awsAccessKey) ? dto.awsAccessKey :  "";
    this.awsSecretKey = (dto && dto.awsSecretKey) ? dto.awsSecretKey : "";
    this.region = (dto && dto.region) ? dto.region : "";
    this.endpoint = (dto && dto.endpoint) ? dto.endpoint : "";
    this.service = "es";
   }

/**
 * @function count
 * @param {object} [parameters]
 * @return {Object} 
 */
//COUNT
Es.prototype.count = function(params) {

    var index = (params && params.index) ? params.index :  null;
    var type = (params && params.type) ? params.type :  null;
    var query = (params && params.query) ? params.query :  null;

    if (index == null){
        this.url = this.endpoint + "/_count";
    }
    else{
        if (type == null){
            this.url = this.endpoint +"/" + index + "/_count";
        }
        else {
            this.url = this.endpoint +"/"+index + "/" + type + "/_count";
        }
    }

    if (query != null){
        this.url = this.url + "?q=" + query;
    }

    //get the signature
    var sign ;
    
   return http.request(sign);
    
}

/**
 * @function search
 * @param {object} [parameters]
 * @return {Object} 
 */
//Search
Es.prototype.search = function(params) {

    var index = (params && params.index) ? params.index :  null;
    var type = (params && params.type) ? params.type :  null;
    var query = (params && params.query) ? params.query :  null;

    if (index == null){
        this.url = this.endpoint + "/_search";
    }
    else{
        if (type == null){
            this.url = this.endpoint +"/" + index + "/_search";
        }
        else {
            this.url = this.endpoint +"/"+index + "/" + type + "/_search";
        }
    }

    if (query != null){
        this.url = this.url + "?q=" + query;
    }

 //get the signature
    var sign ;
    
   return http.request(sign);
    
}



/**
 * @function alias
 * @param {object} [parameters]
 * @return {Object} 
 */
//alias
Es.prototype.alias = function(params) {

    var index = (params && params.index) ? params.index :  null;

    if (index == null){
        this.url = this.endpoint + "/_alias";
    }
    else{
        this.url = this.endpoint +"/" + index + "/_alias";
    }

   //get the signature
    var sign ;
    
   return http.request(sign);
    
}

/**
 * @function all
 * @return {Object} 
 */
//all
Es.prototype.all = function() {

    this.url = this.endpoint + "/_all";

     //get the signature
    var sign ;
    
   return http.request(sign);
    
}


/**
 * @function search
 * @param {object} [parameters]
 * @return {Object} 
 */
//Flush
Es.prototype.search = function(params) {

    var index = (params && params.index) ? params.index :  null;
    var type = (params && params.type) ? params.type :  null;

    if (index == null){
        this.url = this.endpoint + "/_search";
    }
    else{
        if (type == null){
            this.url = this.endpoint +"/" + index + "/_search";
        }
        else {
            this.url = this.endpoint +"/"+index + "/" + type + "/_search";
        }
    }
    
 //get the signature
    var sign ;
    
   return http.request(sign);
    
}

/**
 * @function mapping
 * @param {object} [parameters]
 * @return {Object} 
 */
//mapping
Es.prototype.mapping = function(params) {

    var index = (params && params.index) ? params.index :  null;

    if (index == null){
        this.url = this.endpoint + "/_mapping";
    }
    else{
        this.url = this.endpoint +"/" + index + "/_mapping";
    }

 //get the signature
    var sign ;
    
   return http.request(sign);
    
}

/**
 * @function nodes
 * @return {Object} 
 */
//nodes
Es.prototype.nodes = function() {

    this.url = this.endpoint+ "/_nodes";
    //get the signature
    var sign ;
    
   return http.request(sign);
    
}

/**
 * @function snapshot
 * @return {Object} 
 */
//snapshot
Es.prototype.snapshot = function() {

    this.url = this.endpoint+ "/_snapshot";
   //get the signature
    var sign ;
    
   return http.request(sign);
    
}

/**
 * @function clusterState
 * @return {Object} 
 */
//cluster/state
Es.prototype.clusterState = function() {

    this.url = this.endpoint+ "/_cluster/state";
 //get the signature
    var sign ;
    
   return http.request(sign);
    
}

/**
 * @function stats
 * @param {object} [parameters]
 * @return {Object} 
 */
//stats
Es.prototype.stats = function(params) {

    var index = (params && params.index) ? params.index :  null;

    if (index == null){
        this.url = this.endpoint + "/_stats";
    }
    else{
        this.url = this.endpoint +"/" + index + "/_stats";
    }

     //get the signature
    var sign ;
    
   return http.request(sign);
    
}

/**
 * @function clusterStats
 * @return {Object} 
 */
//clusterStats
Es.prototype.clusterStats = function() {

    this.url = this.endpoint+ "/_cluster/stats";
   //get the signature
    var sign ;
    
   return http.request(sign);
    
}


/**
 * @function post
 * @param {object} [parameters]
 * @return {Object} 
 * @throw {Error} [MISSING_PARAMETER]
 */
//Post     																		
Es.prototype.post = function(params) {

    var index = (params && params.index) ? params.index :  null;
    var type = (params && params.type) ? params.type :  null;
    var id = (params && params.id) ? params.id :  null;
    var obj = (params && params.obj) ? params.obj : null;



    if (obj == null){
        throw {
            "errorCode": "Missing parameter",
            "errorDetail": "obj  is required"
        };
    }
    if (index == null){
        throw {
            "errorCode": "Missing parameter",
            "errorDetail": "index  is required"
        };
    }
    else{
        if (type == null){
            throw {
                "errorCode": "Missing parameter",
                "errorDetail": "type is required"
            };        }
        else {
            this.url = this.endpoint +"/"+index + "/" + type ;
        }
    }

    if (id != null){
        this.url = this.url + "/" + id;
    }

    //get the signature
    var sign ;
    
   return http.request(sign);
    
}



/**
 * @function count
 * @param {object} [parameters]
 * @return {Object} 
 * @throw {Error} [MISSING_PARAMETER]
 */
//Delete
Es.prototype.count = function(params) {

    var index = (params && params.index) ? params.index :  null;
    var type = (params && params.type) ? params.type :  null;
    var id = (params && params.id) ? params.id :  null;

    if (index == null){
        throw {
            "errorCode": "Missing parameter",
            "errorDetail": "index is required"
        };  
    }
    else{
        if (type == null){
            this.url = this.endpoint +"/" + index + "/_delete_by_query";
        }
        else {
            this.url = this.endpoint +"/"+index + "/" + type + "/_count";
        }
    }



   //get the signature
    var sign ;
    
   return http.request(sign);
    }


/**
 * @function Get
 * @param {object} [parameters]
 * @return {Object} 
 */
//GET
Es.prototype.Get = function(params) {

    var index = (params && params.index) ? params.index :  null;
    var type = (params && params.type) ? params.type :  null;
    var id = (params && params.id) ? params.id :  null;


    if (index == null){
        this.url = this.endpoint + "/_search";
    }
    else{
        if (type == null){
            this.url = this.endpoint +"/" + index + "/_search";
        }
        else {
            this.url = this.endpoint +"/"+index + "/" + type + "/_search";
        }
    }

  //get the signature
    var sign ;
    
   return http.request(sign);
    
}













