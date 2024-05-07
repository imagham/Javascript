var hasil_perkalian=6*6
console.log(hasil_perkalian);
// soal andi
var nama='Javascript'
console.log(nama);

var hargabuku=30000
console.log(hargabuku);

var jumlahdibeli=5
console.log(jumlahdibeli);

var totalharga1= jumlahdibeli*hargabuku
console.log(totalharga1);
// soal andi 2
var namabuku='Kitab Tauhid'
var hargabuku=150000
var jumlahdibeli=10
var discount = 0.5
var totalharga=hargabuku*jumlahdibeli
console.log('ini buku '+namabuku+' jumlah beli '+ jumlahdibeli +' total '+totalharga );
var totalhargasetelahdiscount=totalharga*discount
console.log('Total harga setelah discount ' +totalhargasetelahdiscount);
// soal andi 3
var buku_1='Nahwu Wadhih'
var buku_2='kitab Tashrif'
var hargabuku_1=25000
var hargabuku_2=35000
var jumlahbeli_buku1=2
var jumlahbeli_buku2=1
var discount=0.2
var totalhargabuku_1=hargabuku_1*jumlahbeli_buku1
var totalhargabuku_2=hargabuku_2*jumlahbeli_buku2
var totalbuku1_dan_buku2=totalhargabuku_1+totalhargabuku_2
console.log('Buku '+buku_1 +' '+jumlahbeli_buku1 +' Buku '+buku_2+' '+jumlahbeli_buku2+' total harga '+totalbuku1_dan_buku2 );
var td=totalbuku1_dan_buku2*discount
var totalsetelahdiscount = totalbuku1_dan_buku2-td
console.log('Total harga setelah discount '+ totalsetelahdiscount);

var totalkeseluruhan=totalharga1+totalhargasetelahdiscount+totalsetelahdiscount
console.log('Total harga keseluruhan '+totalkeseluruhan);