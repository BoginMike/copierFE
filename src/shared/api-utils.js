function getBaseUrl() {
    return process.env.REACT_APP_BASE_URL;
}

export function getApiCall(url, headers) {
    return fetch(getBaseUrl() + url, {
        headers: {
            token: localStorage.getItem('token'),
            ...headers
        },
        method: "GET"
    })
        .then(x => x.json())
}


export function postApiCall(url, body, headers) {
    return fetch(getBaseUrl() + url, {
        headers: {
            token: localStorage.getItem('token'),
            'Content-Type':"application/json",
            ...headers
        },
        method: "POST",
        body: JSON.stringify(body)
    }).then(x => x.json())
}

export function putApiCall(url, body, headers) {
    return fetch(getBaseUrl() + url, {
        headers: {
            token: localStorage.getItem('token'),
            'Content-Type':"application/json",
            ...headers
        },
        method: "PUT",
        body: JSON.stringify(body)
    }).then(x => x.json())
}

export function patchApiCall(url, body, headers) {
    return fetch(getBaseUrl() + url, {
        headers: {
            token: localStorage.getItem('token'),
            'Content-Type':"application/json",
            ...headers
        },
        method: "PATCH",
        body: JSON.stringify(body)
    }).then(x => x.json())
}


export function deleteApiCall(url, headers) {
    return fetch(getBaseUrl() + url, {
        headers: {
            token: localStorage.getItem('token'),
            ...headers
        },
        method: "DELETE"
    }).then(x => x.json())
}