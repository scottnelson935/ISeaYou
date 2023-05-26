const video = document.getElementById('myVideo');
const playbar = document.querySelector('.playbar');

video.addEventListener('timeupdate', updatePlaybar);

function updatePlaybar() {
    const progress = (video.currentTime / video.duration) * 100;
    playbar.style.width = progress + '%';
}
