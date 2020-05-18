export function fetchData (url: string): Promise<any> {
    return fetch(url)
        .then((response): Promise<any> => {
            return response.json();
        });
}
