let lists = document.querySelectorAll('.sliderTab');
lists.forEach(item => {
    item.addEventListener('click', function(event){
       if(event.target.classList.contains('nav-item')){
         let lastActive = item.querySelector('li.active');
         let newActive = event.target;
         let bgActive = item.querySelector('.bg-active');

         lastActive.classList.remove('active');
         newActive.classList.add('active');
         bgActive.style.left = newActive.offsetLeft + 'px';

         lastActiveContent = item.querySelector('.tab.active');
         newActiveContent = document.getElementById(newActive.dataset.target);
         lastActiveContent.classList.remove('active');
         newActiveContent.classList.add('active');
       }
    })
})