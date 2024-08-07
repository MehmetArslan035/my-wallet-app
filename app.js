// Selectors

// ekle formu

const ekleBtn= document.querySelector("#ekle-btn")
const gelirInput= document.querySelector("#gelir-input")
const ekleFormu= document.querySelector("#ekle-formu")


//? sonuc tablosu

const gelirinizTable= document.getElementById("geliriniz")
const giderinizTable=document.getElementById("gideriniz")
const kalanTable=document.getElementById("kalan")


// variables
let gelirler=0
let harcamaListesi=[]

//* Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//* harcama tablosu
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//! ilk formu doldurma

harcamaFormu.addEventListener("submit", (e)=>{
e.preventDefault()

const yeniHarcama={
    tarih:tarihInput.value,
    miktar:miktarInput.value,
    aciklama:harcamaAlaniInput.value,
    id:new Date().getTime()
};

harcamaListesi.push(yeniHarcama)

harcamayiShowScreen(yeniHarcama)

})

//! harcamaları dom daki table a bastırma

const harcamayiShowScreen=({id,miktar,tarih,aciklama})=>{
    harcamaBody.innerHTML+= `
    <tr>
        <td class="bg-warning">${tarih}</td>
        <td class="bg-warning">${aciklama}</td>
        <td class="bg-warning">${miktar}</td>
        <td class="bg-warning"><i class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
    </tr>
`;

document.querySelectorAll(".fa-trash-can").forEach((sil)=>{
    sil.onclick=()=>{
        sil.parentElement.parentElement.remove()
    }
})
};

