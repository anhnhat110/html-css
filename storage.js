localStorage.setIteṃ('name','Bob');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
// Tuong tu voi sessionStorage
// cookies
document.cookie = 'name=pin;expires=' + new Date(2025,0,1)
document