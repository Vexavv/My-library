import {Login} from "./class-login.js";

 document.querySelector('.enter-form').addEventListener('click', (e) => {
     e.preventDefault();
     new Login().createFormEnter();
     new Login().enter()

     // new Login().enter()
     const myModal = document.querySelector('.modal1')
     const closeBtn = document.querySelector('.modal1-close')
     window.addEventListener('click', (event) => {
         if (event.target === myModal || event.target === closeBtn) {
             myModal.remove()
         }
     })
 })
