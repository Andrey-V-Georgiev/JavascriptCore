function add(n) {
    sum = n;
    const proxy = new Proxy(function a () {}, {
        get (obj, key) {
            return () => sum;
        },
        apply (receiver, ...args) {
            sum += args[1][0];
            return proxy;
        },
    });
    return proxy
}
console.log(add(1)(2)(3)(10));
