
const questions = document.querySelectorAll('.question')
questions.forEach(question => {
    question.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('active')
    })
})