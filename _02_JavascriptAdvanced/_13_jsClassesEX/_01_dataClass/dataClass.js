class Request {
    constructor(method, uri, version, message, response){
    [this.method, this.uri, this.version, this.message, this.response] = [method, uri, version, message, response];
    this.fulfilled = false;
    }
}