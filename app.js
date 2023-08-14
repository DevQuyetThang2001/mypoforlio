let banners = document.querySelectorAll('.banner_img');
let buttons = document.querySelectorAll('.button li');
let navbarMobile = document.querySelector('.navbar_moblie');
let navbarMobileBtn = document.querySelector('.navbar_btn-mobile');
let closeBtn = document.querySelector('.close-btn');
let header = document.querySelector('header')
let mySkills = document.querySelectorAll('.about_skill');
console.log(mySkills);

let currentIndex = 0;

// for(let i = 0;i < buttons.length;i++){
//     buttons[i].addEventListener('click',function(){
//         for(let i = 0;i < buttons.length;i++){
//             buttons[i].classList.remove('active');
//         }
//         this.classList.add('active');


//         for(let i = 0;i < banners.length;i++){
//             banners[i].classList.remove('active');
//         }

//         buttons[currentIndex] == banners[i].classList.add('active')
//     })
// }
// Banner Slide
function showSlide(){
    let i;
    for(i = 0;i < banners.length;i++){
        banners[i].style.display = 'none';
    }
    currentIndex++

    if(currentIndex > banners.length){
        currentIndex = 1;
    }

    for(i = 0;i < buttons.length;i++){
        buttons[i].className = buttons[i].className.replace(' active','');
    }

    banners[currentIndex-1].style.display = 'block';
    buttons[currentIndex-1].className += ' active';
    setTimeout(showSlide,2000)
}

showSlide()
// -------------
let currentPosition = true;
window.addEventListener('scroll',function(){
    if(window.scrollY > 797){
        if(currentPosition == true){
            header.style.background = '#333';
            header.style.color = '#eaeaea'
            document.querySelector('.abouts').style.paddingTop = '100px';
            document.querySelector('.abouts_title').style.opacity = '1';
            for(let  i = 0; i < mySkills.length;i++){
                mySkills[i].classList.add('active');
            }
            currentPosition = false;
        }
    }
    else {
        header.style.background = 'transparent';
        document.querySelector('.abouts').style.paddingTop = '50px'
        currentPosition = true;
    }
    
})




// Mobile Events Click
navbarMobileBtn.addEventListener('click',function(){
    navbarMobile.classList.add('active');
})
closeBtn.addEventListener('click',function(){
    navbarMobile.classList.remove('active');
})


