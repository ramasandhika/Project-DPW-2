//ngambil elemen
var nama = document.querySelector("#nama");
var email = document.querySelector("#email");
var alamat = document.querySelector("#alamat");
var nohp = document.querySelector("#nohp");

function login(e){
    sessionStorage.setItem("nama",nama.value);//set item
    sessionStorage.setItem("email",email.value);
    sessionStorage.setItem("alamat",alamat.value);
    sessionStorage.setItem("nohp",nohp.value);
    if (validasi()){
        location.href = "ucapan.html"
    }     
}

function validasi(){
    var namaErr = "";
    var emailErr = "";
    var alamatErr = "";
    var nohpErr = "";
    if (nama.value == ""){
        namaErr = "Nama Belum diisi"
        nama.style.border = "2px solid red"
        document.querySelector("#namaErr").innerHTML = namaErr;
    }
    if (email.value == ""){
        emailErr = "Email Belum diisi"
        email.style.border = "2px solid red"
        document.querySelector("#emailErr").innerHTML = emailErr;
    }
    if (alamat.value == ""){
        alamatErr = "Alamat Belum diisi"
        alamat.style.border = "2px solid red"
        document.querySelector("#alamatErr").innerHTML = alamatErr;
    }
    if (nohp.value == ""){
        nohpErr = "No HP Belum diisi"
        nohp.style.border = "2px solid red"
        document.querySelector("#nohpErr").innerHTML = nohpErr;
    }
    if ((namaErr != "") || (emailErr != "") || (alamatErr != "") || (nohpErr != "")){
        return false
    }else{
        return true
    }
}

function hapusErr(id,error){
    document.getElementById(error).innerHTML = "";
    document.getElementById(id).style.border = "";
}
