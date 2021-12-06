const $showContact = document.querySelector(".contact");
const $max_contact = document.querySelector(".max_contact");
const $closeContact = document.querySelector(".closeContact")

$showContact.addEventListener('click',  () =>{
$max_contact.style.display == "flex" ? $max_contact.style.display = "none" :$max_contact.style.display = "flex"
})
$closeContact.addEventListener('click', ()=> {
    $max_contact.style.display = "none" 
})