// Object Literal
// let mahasiswa = {
//     nama:'Yasya Indra',
//     energi:10,
//     makan: function(porsi){
//         this.energi += porsi
//         console.log(`energi anda menjadi ${this.energi}`)
//     }
// }
// Function Declearation
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama} energi anda bertambah menjadi ${this.energi}`)
//     }
//     return mahasiswa;
// }
// const indra = Mahasiswa('Indra',10)
// COnstructor Function
function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`halo ${nama} energi anda bertambah menjadi ${this.energi}`)
    }
}
const indra = new Mahasiswa('Indra',10)
