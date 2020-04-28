const app = document.querySelector('#app');

const header = document.createElement('h1');
header.innerText = 'Acme Employees DOM';

const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep', fav:false},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

const turnFav = function(obj) {
    if(!obj.hasOwnProperty('fav')) {
        obj.fav = false;
        console.log('if got triggered' + obj.fav)
        console.log(obj.name)
        console.log(obj.fav)
    }
    else {
        obj.fav = !obj.fav;
        console.log(obj.fav)
    }
}

const createEmployeeBox = function(obj) {
    const employeeContainer = document.createElement('button');
    employeeContainer.classList.add('employeeBox');
    employeeContainer.innerText = obj.name;
    employeeContainer.addEventListener('click',ev=>turnFav(obj));
    return employeeContainer;
}

const createButtons = function(employee) {

}

const render = function() {
    app.innerHTML = '';
    app.append(header);
    for(let i=0;i<employees.length;i++) {
        const employee = employees[i];
        app.append(createEmployeeBox(employee));
    }
}

render();