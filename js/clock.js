window.onload = () => {
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    document.getElementById('hours').innerHTML = new Date().getHours().toString().padStart(2, "0");
    document.getElementById('minutes').innerHTML = new Date().getMinutes().toString().padStart(2, "0");
}