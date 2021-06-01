var nama = sessionStorage.getItem("nama");
var email = sessionStorage.getItem("email");
var alamat = sessionStorage.getItem("alamat");
var nohp = sessionStorage.getItem("nohp");
var namaBrg = sessionStorage.getItem("namaBrg");
var harga = sessionStorage.getItem("harga");

document.querySelector("#namepembayaran").innerHTML = nama;
document.querySelector("#emailpembayaran").innerHTML = email;
document.querySelector("#alamatpembayaran").innerHTML = alamat;
document.querySelector("#nohppembayaran").innerHTML = nohp;
document.querySelector("#nmbarang").innerHTML = namaBrg;
document.querySelector("#uangbarang").innerHTML = harga;





