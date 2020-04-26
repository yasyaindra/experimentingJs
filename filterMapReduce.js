const angka = [2,1,5,6,10,-4]
// const newAngka = []

// for(i=0;i<angka.length;i++){
//     if(angka[i]<3){
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka)
// filter
// const newAngka = angka.filter(a => a <= 3);
// console.log(newAngka)
// map
// const newAngka = angka.map(a=> a*3)
// console.log(newAngka)

const hasil = angka.filter(a => a >= 3)
    .map(a => b = a*3)
    .reduce((a,c) => a+c)

console.log(b)
console.log(hasil)