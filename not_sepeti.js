const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');



yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);

function gorevSilTamamla(e) {
   const tiklanilanEleman = e.target;

   if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
      tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi')
   }

   if(tiklanilanEleman.classList.contains('gorev-btn-sil')) {
      tiklanilanEleman.parentElement.classList.toggle('kaybol');

      tiklanilanEleman.parentElement.addEventListener('transitionend', function() {
         tiklanilanEleman.parentElement.remove()
      })
      //tiklanilanEleman.parentElement.remove()
   }
}



function gorevEkle(e) {
   e.preventDefault();

   //? DİV oluturma

   const gorevDiv = document.createElement('div');
   gorevDiv.classList.add('gorev-item');

   //? Lİ oluştrurma
   const gorevLi = document.createElement('li');
   gorevLi.classList.add('gorev-tanim');
   gorevLi.innerText = yeniGorev.value;
   gorevDiv.appendChild(gorevLi);


   //? tamamlandı butonu ekle
   const gorevTamamBtn = document.createElement('button');
   gorevTamamBtn.classList.add('gorev-btn');
   gorevTamamBtn.classList.add('gorev-btn-tamamlandi');
   gorevTamamBtn.innerHTML = '<i class="far fa-check-square"></i>';
   gorevDiv.appendChild(gorevTamamBtn);


   //? silme butonu ekle
   const gorevSilBtn = document.createElement('button');
   gorevSilBtn.classList.add('gorev-btn');
   gorevSilBtn.classList.add('gorev-btn-sil');
   gorevSilBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
   gorevDiv.appendChild(gorevSilBtn);


   yeniGorev.value = '';

   gorevTamamBtn.classList.add('gorev-btn-tamamlandi')
   //? ul'ye oluşturdugumuz divi ekleyelim
   gorevListesi.appendChild(gorevDiv)
}




















/*
const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('gorev-listesi');

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);
document.addEventListener('DOMContentLoaded', localStorageOku);


function gorevSilTamamla(e) {
     const tiklanilanEleman = e.target;
     
     if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
        
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
     }
     if(tiklanilanEleman.classList.contains('gorev-btn-sil')) {
        tıklanilanElema.parentElement.classList.toggle('kaybol')
        const silineceGorev = tiklanilanEleman.parentElement.children[0].innerText;
        
        localStorageSil(silineceGorev);

        tiklanilanEleman.parentElement.addEventListener('transitionend', function (){
             tiklanilanEleman.parentElement.remove();
        });
        
     }
}

function gorevEkle(e){
    e.preventDefault();
     

    gorevItemOlustur(yeniGorev.value);
    //localstorage'a kaydet
   localStorageKaydet(yeniGorev.value);
   yeniGorev.value = "";
}


function localStorageKaydet(yeniGorev) {
   let goreveler;

   if(localStorage.getItem('gorevler') == null) {
      goreveler = [];
   } else {
      gorevler = JSON.parse(localStorage.getItem('gorevler'));
   }

   gorevler.push(yeniGorev);
   localStorage.setItem('gorevler', JSON.stringify(gorevler));
}

function localStorageOku() {
   let goreveler;

   if(localStorage.getItem('gorevler') == null) {
      goreveler = [];
   } else {
      gorevler = JSON.parse(localStorage.getItem('gorevler'));
   }

   gorevler.forEach(function(gorev) {
      gorevItemOlustur(gorev);
   });
}

function gorevItemOlustur (gorev) {
   //  oluşturma
   const gorevDiv = document.createElement('div');
   gorevDiv.classList.add('gorev-item');


   //li oluşturma
   const gorevLi = document.createElement('li');
   gorevLi.classList.add('gorev-tanim');
   gorevLi.innerText = gorev;
   gorevDiv.appendChild(gorevLi)

   // tamamlandı butonu ekle
   const gorevTamamBtn = document.createElement('button');
   gorevTamamBtn.classList.add('gorev-btn');
   gorevTamamBtn.classList.add('gorev-btn-tamamlandi');
   gorevTamamBtn.innerHTML = '<i class="far fa-check-square"></i>'
   gorevDiv.appendChild(gorevTamamBtn);


   /// sil botunu ekleme
   const gorevSilBtn = document.createElement('button');
   gorevSilBtn.classList.add('gorev-btn');
   gorevSilBtn.classList.add('gorev-btn-sil');
   gorevSilBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
   gorevDiv.appendChild(gorevSilBtn);

   
   
   


   // ul ye oluşturdgumuz divi ekleyelim

   gorevListesi.appendChild(gorevDiv);
}

function localStorageSil(gorev) {
   let goreveler;

   if(localStorage.getItem('gorevler') == null) {
      goreveler = [];
   } else {
      gorevler = JSON.parse(localStorage.getItem('gorevler'));
   }

   // spilice ile item silmek
   const silinecekElemanIndex = gorevler.indexOf(gorev);
   console.log(silinecekElemanIndex);
   gorev.splice(silinecekElemanIndex, 1);


   localStorageKaydet.setItem('gorevler', JSON.stringify(goreveler));

   
}
*/