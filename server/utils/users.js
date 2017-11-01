[{
    id: '/#12poiagsgsgj',
    name: 'Byron',
    room: 'Test'
}]

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        //return user removed
        var user = this.getUser(id);

        if (user){
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }

    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room){
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old`;
//     }
// }
//
// var me = new Person('Byron', 31);
// var descriptiion = me.getUserDescription();
// console.log(descriptiion);