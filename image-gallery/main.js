
function showImage(imageSrc){
    let modal = document.getElementById('modal')
    let modalImage = document.getElementById("modal-image")
    modal.style.display = 'block'
    modalImage.src = imageSrc;
}

function closeModal(){
    let modal = document.getElementById("modal")
    modal.style.display = 'none'

}

window.onclick= function(event){
    let modal = document.getElementById("modal")
    if(event.target == modal){
        modal.style.display = 'none'
    }
}