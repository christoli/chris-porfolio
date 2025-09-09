const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

//   Show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});

//   Hide menu
closeBtn.addEventListener( 'click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});

const navItems = menu.querySelectorAll('li');

//   Remove active class from nav item
const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
});
}

//   Add active class to clicked nav item
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    });
}); 


// Show/Hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    });
});

// Add box shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
});

