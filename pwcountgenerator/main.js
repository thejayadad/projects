
document.getElementById('generate-btn').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var password = generatePassword(length)
    document.getElementById("password-display").textContent = password
})

function generatePassword(length){
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for(var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length)
        password += charset.charAt(randomIndex)
    }
    return password
}