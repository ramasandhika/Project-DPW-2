// search 
const sch = document.querySelector('#inputan');
const card = document.querySelectorAll('.card');
const btn = document.querySelector('#btn-search');
console.log(card)

console.log(parseInt(card[0].children[1].children[2].children[0].innerHTML.replace(".","")));
btn.addEventListener('click',function(){
    card.forEach(function cari(item){
        const hg = parseInt(item.children[1].children[2].children[0].innerHTML.replace(".",""));
        const inp = parseInt(sch.value)
        if (inp != hg){
            item.style.visibility = "hidden";
        }else {
            item.style.visibility = "visible";
        }
    })
})


console.log(card[0].children[1].children[1].innerHTML)
console.log(card[0].children[1].children[2].children[0].innerHTML)
function mnc(element){
    const id = parseInt(element.id)
    const nmBrg = card[id].children[1].children[1].innerHTML;
    const hgBrg = card[id].children[1].children[2].children[0].innerHTML;
    sessionStorage.setItem("namaBrg",nmBrg);
    sessionStorage.setItem("harga",hgBrg);
    location.href = "pembayaran.html";
    console.log(nmBrg)
    console.log(hgBrg)

}
