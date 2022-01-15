'use strict';
const modalInfo = document.querySelector('.modalInfo');
const modalVideo = document.querySelector('.modalVideo');

const openModalInfo = document.getElementById('btn-info');
const openModalVideo = document.getElementById('btn-video');

const modalInfoClose = document.querySelector('.close-modalInfo');
const modalVideoClose = document.querySelector('.close-modalVideo');


const showOrCloseModalInfo = function(){
    modalInfo.classList.toggle('hidden');
};
const showOrCloseModalVideo = function(){
    modalVideo.classList.toggle('hidden');
};

openModalInfo.addEventListener('click', showOrCloseModalInfo);
openModalVideo.addEventListener('click', showOrCloseModalVideo);

modalInfoClose.addEventListener('click', showOrCloseModalInfo);
modalVideoClose.addEventListener('click', showOrCloseModalVideo);

document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modalInfo.classList.contains('hidden')){
        showOrCloseModalInfo();
    }
    if(e.key === 'Escape' && !modalVideo.classList.contains('hidden')){
        showOrCloseModalVideo();
    }
} );





