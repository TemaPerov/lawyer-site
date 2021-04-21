
document.addEventListener('DOMContentLoaded',()=>{
   const form = document.querySelector('#form');
   form.addEventListener('submit', formSend);

   async function formSend(e){
       e.preventDefault();
    //    let error = formValidate(form);
    let formData =new FormData(form); 

    let response = await fetch('sendmail.php',{
        method: 'POST',
        body: formData
    })
    if(response.ok){
        let result = await response.json();
        alert(result.message);
        form.reset();
    }else{
        alert('помилка')
    }
   }
})
// function formValidate(form){
//     let error = 0;
//     let formReq =document.querySelectorAll('._req');

//     for(i=0; i<formReq.length; i++){
//         const input = formReq[i];
//     }
// }