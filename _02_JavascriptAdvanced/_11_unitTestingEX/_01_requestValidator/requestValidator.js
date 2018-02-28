function result(request) {
    let method = request.method;
    let uri = request.uri;
    let version = request.version;
    let message = request.message;

    validateMethod(method);
    validateURI(uri);
    validateVersion(version);
    validateMessage(message);

    function validateMethod() {
        let match = /^(GET|POST|DELETE|CONNECT)$/.exec(method);
        if (!match || method === undefined) {
            throw new Error(`Invalid request header: Invalid ${'Method'}`);
        } else {
            return true;
        }
    }

    function validateURI() {
        let match = /^[a-zA-Z0-9_*\.]+?$/.exec(uri);
        if (uri === '' || uri === undefined) {
            throw new Error(`Invalid request header: Invalid ${'URI'}`);
        } else if (match) {
            return true;
        } else {
            throw new Error(`Invalid request header: Invalid ${'URI'}`);
        }
    }

    function validateVersion() {
        let match = /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/.exec(version);
        if (!match || version === undefined) {
            throw new Error(`Invalid request header: Invalid ${'Version'}`);
        } else {
            return true;
        }
    }

    function validateMessage() {
        let match = /^([^\>\<\\\&\'\"])*$/.exec(message);
        if (!match || message === undefined) {
            throw new Error(`Invalid request header: Invalid ${'Message'}`);
        } else {
            return true;
        }
    }
    return request;
}

let obj = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};
console.log(result(obj));