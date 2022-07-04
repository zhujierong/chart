const getMenuList = (data) => {
    return fetch('/api/menu/list', data)
        .then((response) => {
            console.log('response', response)
            return response.json()
        })
        .then((data) => console.log(data))
}

export { getMenuList }
