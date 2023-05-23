// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefer-color-sheme: dark)").matches;

//Icons Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// // Initial Theme check
// const themeCheck = () => {
//     if (userTheme === "dark" || (!userTheme && systemTheme)) {
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("display-none");
//         return;
//     }

//     sunIcon.classList.add("display-none");

// };

// //Manual Theme Switch
// const themeSwitch = () => {
//     if (document.documentElement.classList.contains("dark")){
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         return;
//     }
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "light");
// };

// //Call theme switch on clicking buttons
// sunIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// moonIcon.addEventListener("dark", () => {
//     themeSwitch();
// });

// //Invoke theme on Initial load
// themeCheck();

// (function(){
//     const darkToggle = document.querySelector('.toggle-dark');

//   darkToggle.addEventListener('click', (event) => {
//     event.preventDefault();
//     document.documentElement.classList.toggle('dark');
//   })

// }) ();
