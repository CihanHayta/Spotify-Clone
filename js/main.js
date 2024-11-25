import { API } from "./api.js";
import { UI } from "./ui.js";
const ui = new UI();
const api = new API();



document.addEventListener("DOMContentLoaded", () => {
    //? loader render 
    ui.renderLoader();
    api.getpopuler().then((data) => ui.renderCard(data)).catch((err) => {
        console.log("hata", err);
        alert("üzgünüz hata oluştu");
    })

});

//? form inputundan verilerini çektik

ui.form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const query = e.target[0].value;

    if(query.trim()==="") return alert("lütfen geçerli arama işlemi gerçekleştiriniz")

    ui.renderLoader();

    ui.updateTitle(query+ ` için sonuçlar`);
    
    api
    .searchMusic(query)
    // Gelen şarkı verileriyle ekrana kartları render et
    .then((data) => ui.renderCard(data))
    // Hata varsa bunu yakala ve uyarı ver
    .catch((err) => {
      alert("İşlem gerçekleştirilemedi");
      console.log(err);
    });

})


ui.list.addEventListener("click",(e)=>{
   

    if (e.target.className == "play") {
        // Tıklanılan elemanın kapsamına eriş
        const card = e.target.closest(".card");
    
        const data = card.dataset;

        ui.renderPlayer(data);
        

      }
    
});
