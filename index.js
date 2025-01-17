const DOMAIN_API = '127.0.0.1'

window.addEventListener('load', () => {
    console.log('start client>>>');
    getToken()

})

function getToken(){
    const url = `http://${DOMAIN_API}:3000/auth/login`;
    const options = {
        method: 'POST',
        body: JSON.stringify({email: 'anonystick@gmail.com', password: 'password'}),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    fetch(url, options)
    .then(getUsers)
    .then(console.log)
    .catch(console.error)
        
}

function getUsers(){
    const url = `http://${DOMAIN_API}:3000/api/users`;
    const options = {
        credentials: 'include'
    }
    return fetch(url, options)
        .then(response => response.json())
}