function showIntroModal() {
    const introModal = document.getElementById("introModal");
    introModal.style.display = "block";

    const closeIntroModal = document.getElementById("closeIntroModal");
    closeIntroModal.onclick = function() {
        introModal.style.display = "none";
        document.getElementById("overlay").style.display = "none";
    };
}


showIntroModal();


function updateTimer() {
    const targetDate = new Date("2023-11-15T14:00:00+05:30").getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        const timerContainer = document.querySelector(".timer-container");
        if (timerContainer) {
            timerContainer.remove();
        }

      
        const introModalText = document.querySelector("#introModal p");
        if (introModalText) {
            introModalText.textContent = "Audio files available now, listen to Walkerworld album or direct download it 🥷💥";
        }

       
        const musicPlayer = document.querySelector(".music-player");
        if (musicPlayer) {
            musicPlayer.style.marginTop = "95px"; 
        }
    } else {
        
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}


updateTimer();

setInterval(updateTimer, 1000);
