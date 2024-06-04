var names = ["Alice", "Bob", "Charlie", "Diana", "Eleanor", "Finn", "Grace", "Henry", "Isabella", "Jack", "Katherine", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Taylor", "Ursula", "Victor", "Wendy", "Xander", "Yasmine", "Zachary"];

document.getElementById('generate-btn').addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() *names.length)
    var randomName = names[randomIndex]
    document.getElementById('name-display').textContent = randomName
})