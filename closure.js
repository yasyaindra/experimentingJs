// function init() {
//     // nama = 'Indra'
//     return function(nama) {
//         console.log(nama)
//     }
// }

// let panggilNama = init()
// panggilNama('Afifan')
// panggilNama('Maulana')


function add(){
    let counter = 0;
    return function() {
        return ++counter
    }
}

counter = 12

let a = add()
console.log(a())
console.log(a())
console.log(a())
console.log(a())