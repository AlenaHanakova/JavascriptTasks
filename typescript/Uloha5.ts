import data from './Uloha5data.json' with {type: 'json'};

function filterDataByCity(city: string) {
    return data.filter(person => person.address.city == city);
}

function filterDataByLastName(lastName: string) {
    return data.filter(person => person.name.last == lastName);
}

console.log(filterDataByCity("Brno"));
console.log(filterDataByLastName("Smith"));