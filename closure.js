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

counter = 12        /* it won't affect the output of                 sequencing counter*/

let a = add()
console.log(a())    /*1*/
console.log(a())   /*2*/
console.log(a())  /*3*/
console.log(a()) /*4*/