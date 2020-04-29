const app = document.querySelector('#app');

const header = document.createElement('h1');
header.innerText = 'Acme Employees DOM';

const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

const turnFav = function(obj) {
    obj.fav = !obj.fav;
    const noOfFav=employees.reduce((accumulator,currV,currI) => {return accumulator+currV.fav%2},0)
    if (noOfFav >3) {
        obj.fav = !obj.fav
        alert('only 3 favorites')
    }    
    console.log(obj.name + ' has a fav status of '+obj.fav)
}

const createEmployeeBox = function(obj) {
    for(let i=0;i<employees.length;i++) {
        if(employees[i].id = obj.id) {
            if(!employees[i].hasOwnProperty('fav')) {
            employees[i].fav = false;
            break
            }
        }
    }
    const employeeContainer = document.createElement('button');
    console.log(obj.name + ' has been created and fav is '+ obj.fav)
    if(obj.fav) {
        employeeContainer.classList.add('employeeBoxFav');
    }
    else {
        employeeContainer.classList.add('employeeBoxNotFav');
    }
    employeeContainer.innerHTML = obj.name;
    employeeContainer.addEventListener('click',ev=>{
        ev.preventDefault();
        turnFav(obj);
        render();
    });
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