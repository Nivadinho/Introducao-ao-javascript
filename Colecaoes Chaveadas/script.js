functi on getAdmins(map) {
    let adminis =[];
    for([key, value]of map) {
        if(value === 'Admin') {
            adminis.push(key);
        }
    }
    return adminis;

}

const usuarios = new map();

usuarios.set('luiz', 'admin');
usuarios.set('stephany', 'User');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));