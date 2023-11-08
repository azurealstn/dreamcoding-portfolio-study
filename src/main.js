// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - scrollY / homeHeight;
});

// Home 섹션 아래로 반정도 스크롤 시 화살표 아이콘 숨기기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  const homeHalfHeight = homeHeight / 2;
  if (scrollY > homeHalfHeight) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토클버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동을 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});