const rootPath = '../data'

let GET = (opts = {}) => {
    let request = new XMLHttpRequest();
    request.responseType = opts.responseType || 'json'
    request.open("GET", opts.requestUrl);
    return request
}

let loadProducts = (callback = console.log) => {
    let request = GET({
        requestUrl: "./../data/products.json"
    });
    request.addEventListener("load", callback);
    request.send();
}

let loadProduct = (id) => {
    return fetch(`./../data/${id}.json`)
        .then(data => { return data.json() })
        .catch(err => console.log(err))
}


export {
    loadProducts,
    loadProduct,
}