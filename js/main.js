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
document
  .querySelector('.navbar__action-bars')
  .addEventListener('click', function () {
    const currSideBarDisplay = document.querySelector(
      '.navbar__action-rightsidebar'
    ).style.visibility;
    console.log(currSideBarDisplay);
    document.querySelector('.navbar__action-rightsidebar').style.visibility =
      currSideBarDisplay === 'visible' ? 'hidden' : 'visible';
    document.querySelector('.navbar__action-rightsidebar').style.transform =
      currSideBarDisplay === 'visible'
        ? 'translate3d(105%, 0px, 0px)'
        : 'translate3d(0, 0px, 0px)';
    // document.body.style.overflow = currSideBarDisplay === 'visible' || !currSideBarDisplay ? 'hidden' : 'auto';
    if (!currSideBarDisplay) {
      document.body.style.overflow = 'hidden';
    } else if (
      document.querySelector('.navbar__action-rightsidebar').style
        .visibility === 'visible'
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // document.querySelector('.navbar__action-rightsidebar-background').style.display = 'initial'
  });

document.querySelectorAll('.navbar__link').forEach((btn) => {
  if (btn.id === 'btnResume') {
  } else {
    btn.addEventListener('click', function () {
      var scrollDiv = document.querySelector(`.${btn.id}`).offsetTop - 100;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    });
  }
});
