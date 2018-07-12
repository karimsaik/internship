var clientMod = require("./modules/aws/client");
var restServerMod = require("./modules/aws/restServer");


var client = new clientMod.Client({});
var esRest = new restServerMod.RestServer(client);



function Es(dto){

    this.awsAccessKey = (dto && dto.awsAccessKey) ? dto.awsAccessKey :  "";
    this.awsSecretKey = (dto && dto.awsSecretKey) ? dto.awsSecretKey : "";
    this.region = (dto && dto.region) ? dto.region : "";
    this.endpoint = (dto && dto.endpoint) ? dto.endpoint : "";

    var info = {
        "awsAccessKey" : this.awsAccessKey,
        "awsSecretKey" : this.awsSecretKey,
        "region" : this.region,
        "endpoint" : this.endpoint,
        "service" : "es"
    }

    this.client = new clientMod.Client(info);
    this.esRest = new restServerMod.RestServer(client);


}


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

    var params = {
        "url" : this.url
    }

    return esRest.Get(params);
}


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

    var params = {
        "url" : this.url
    }

    esRest.Get(params);
}




//alias
Es.prototype.alias = function(params) {

    var index = (params && params.index) ? params.index :  null;

    if (index == null){
        this.url = this.endpoint + "/_alias";
    }
    else{
        this.url = this.endpoint +"/" + index + "/_alias";
    }

    var params = {
        "url" : this.url
    }
    esRest.Get(params);
}



//Add aliases



//all
Es.prototype.all = function() {

    this.url = this.endpoint + "/_all";

    var params = {
        "url" : this.url
    }
    esRest.Get(params);
}



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

    var params = {
        "url" : this.url
    }

    esRest.Get(params);
}


//mapping
Es.prototype.mapping = function(params) {

    var index = (params && params.index) ? params.index :  null;

    if (index == null){
        this.url = this.endpoint + "/_mapping";
    }
    else{
        this.url = this.endpoint +"/" + index + "/_mapping";
    }

    var params = {
        "url" : this.url
    }
    esRest.Get(params);
}


//nodes
Es.prototype.nodes = function() {

    this.url = this.endpoint+ "/_nodes";
    var params = {
        "url" : this.url
    }
    esRest.Get(params);
}


//snapshot
Es.prototype.snapshot = function() {

    this.url = this.endpoint+ "/_snapshot";
    var params = {
        "url" : this.url
    }
    esRest.Get(params);
}

//cluster/state
Es.prototype.clusterState = function() {

    this.url = this.endpoint+ "/_cluster/state";
    var params = {
        "url" : this.url
    }
    esRest.Get(params);
}

//stats
Es.prototype.stats = function(params) {

    var index = (params && params.index) ? params.index :  null;

    if (index == null){
        this.url = this.endpoint + "/_stats";
    }
    else{
        this.url = this.endpoint +"/" + index + "/_stats";
    }

    var params = {
        "url" : this.url
    }
    esRest.Get(params);
}

//clusterStats
Es.prototype.clusterStats = function() {

    this.url = this.endpoint+ "/_cluster/stats";
    var params = {
        "url" : this.url
    }
    esRest.Get(params);
}


//Post     																	MA 3AM TOZBAT	
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

    var params = {
        "url" : this.url,
        "content" : obj
    }

    return esRest.post(params);
}



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

   

    var params = {
        "url" : this.url
    }

    return esRest.Get(params);
}

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

    var params = {
        "url" : this.url
    }

    esRest.Get(params);
}
