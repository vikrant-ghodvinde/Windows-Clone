function startButton(){
  // buttons
  windowsBtn = document.querySelector('#startBtn');

  // boxes
  startMenu = document.querySelector('.start-menu');

  // actions
  startMenu.classList.toggle('active');
  windowsBtn.classList.toggle('active');
}

function searchButton(){
  // buttons
  searchButn = document.querySelector('#searchBtn');

  // boxes
  searchMenu = document.querySelector('.search-menu');
  startMenu = document.querySelector('.start-menu');

  // actions
  searchMenu.classList.toggle('active');
  searchBtn.classList.toggle('active');
}

function myComputer(){
  // buttons
  // thisPC = document.querySelector('#searchBtn');

  // boxes
  fileExplorer = document.querySelector('.file-explorer');

  // actions
  fileExplorer.classList.toggle('active');
}
