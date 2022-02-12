// Custom Scripts
// Custom scripts
// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)