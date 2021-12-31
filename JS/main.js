var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-70px';
  }
  prevScrollpos = currentScrollPos;
};

// document.querySelector('#btnAbout').addEventListener('click', function () {
//   var scrollDiv = document.querySelector('.about').offsetTop - 100;
//   window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
// });

document.querySelectorAll('.navbar__link').forEach((btn) => {
  if (btn.id === 'btnResume') {
  } else {
    btn.addEventListener('click', function () {
      var scrollDiv = document.querySelector(`.${btn.id}`).offsetTop - 100;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    });
  }
});
