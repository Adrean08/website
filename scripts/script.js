function downloadB (){
  const downloadBTN = document.querySelector('.js-download');

if(downloadBTN.innerText === 'DOWNLOAD CV'){
downloadBTN.innerHTML = 'DOWNLOADED';
downloadBTN.classList.add('is-downloaded');
}else{

downloadBTN.innerHTML ='DOWNLOAD CV';
downloadBTN.classList.remove('is-downloaded');

}
}

const observer =new IntersectionObserver((entry) => {
entries.forEach((entry) => {
  console.log(entry)
  if(entry.isIntersecting){
    entry.target.classList.add('show');

  }else{

    entry.target.classList.remove('show');

  }
});
});


const hiddenElements = document.querySelector('.info');
hiddenElements.forEach((el) => observer.observe(el));
