
// delete popup
const closeButtonD = document.querySelectorAll(".closeBtnModalD")
const modalD = document.querySelector(".deleteModal")
const openButtonD = document.querySelector(".openModalD")
openButtonD.addEventListener("click", () => {
    modalD.showModal()
})

for(i = 0; i < closeButtonD.length; i++){
    closeButtonD[i].addEventListener("click", () => {
    modalD.close();
})
}
