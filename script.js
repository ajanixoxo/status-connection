const statusElement = document.getElementById('status');
const myImg = document.getElementById('myImg');

function updateStatus() {
  if (navigator.onLine) {
    statusElement.innerText = "Online";
    myImg.src = 'https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942406_960_720.jpg';
  } else {
    statusElement.innerText = "Offline";
    myImg.src = 'https://images.squarespace-cdn.com/content/v1/608ad73a8089c163350d37ce/1621436883265-NNM54I3N70JJII3X7I77/unnamed.jpg';
  }
}

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();
