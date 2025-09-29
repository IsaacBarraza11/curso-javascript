'use strict'

// Fetch (ajax) y petiociones a servicios / apis rest
var div_usuarios = document.querySelector('#usuarios');
var div_patricia = document.querySelector('#Patricia');
var div_profesor = document.querySelector('#profesor');


    getUsuarios()
        .then(data => data.json()) // se captura la data en un json
        .then(users => { // dentro de la variable users se guarda
                nombreUsuarios(users);

                return getPatricia();
            })
            .then(data => data.json())
            .then(patricia => {
                mostrarPatricia(patricia);

                return getInfo();
            })
            .then(data => {
                div_profesor.innerHTML = data;
                console.log(data);
            })
            .catch(error => { // capturar error en promesa
                alert("Error en las peticiones");
            });

    function nombreUsuarios(usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + ". " + user.name;
            div_usuarios.appendChild(nombre);

            // agregar ciudad (la hice yo)
            /*
            let ciudad = document.createElement('h3');
            ciudad.innerHTML = " Ciudad: " + user.address.city;
            div_usuarios.appendChild(ciudad);
            */
            document.querySelector('.loading').style.display = "none";
            });
    };

    function mostrarPatricia(patricia){
            let nombre = document.createElement('h3');
            let website = document.createElement('a');
            nombre.innerHTML = patricia.name;
            website.href = 'https://' + patricia.website;
            website.textContent = "Visitar sitio de Patricia";
            div_patricia.appendChild(nombre);
            div_patricia.appendChild(website);
            document.querySelector('#Patricia .loading').style.display = "none";
    };

    function getUsuarios(){
        return fetch('https://jsonplaceholder.typicode.com/users');
    };

    function getPatricia(){
        return fetch('https://jsonplaceholder.typicode.com/users/4');
    };

    function getInfo(){
        var profesor = {
            nombre: 'Isaac',
            apellidos: 'Barraza',
            url: 'https://www.linkedin.com/in/isaac-barraza-b689bb175/'
        };

        return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);
        if(typeof profesor_string != 'string') return reject('error');

        return resolve(profesor_string);
        });
    }