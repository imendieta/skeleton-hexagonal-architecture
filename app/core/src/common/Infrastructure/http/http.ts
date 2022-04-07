const headers = {
    'Content-Type': 'application/json'
}

export const get = async <T>(url:string) => {
    const response = await fetch(url, {
        method: 'GET',
        headers,
    });
    return await response.json() as T;
}

export const post = async <T>(url:string, body:any) => {
    const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
    });
    return await response.json() as T;
}

export const put = async <T>(url:string, body:any) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers,
        body,
    });
    return await response.json() as T;
};

export const _delete = async <T>(url:string) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers,
    });
    return await response.json() as T;
}