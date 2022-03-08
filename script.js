//Variáveis

const modal = document.querySelector(".modal"), //passando a classe
      modalContent = document.querySelector(".modal-content"), //passando a classe 
      btn = document.querySelector(".btn"), //passando id do botão
      close = document.querySelector(".close"); //passando a classe

      btn.addEventListener("click", openModal);
      close.addEventListener("click", closeModal);
      modal.addEventListener("click", closeModal);

      //Abrindo o modal
      function openModal(e){
        e.preventDefault(); //impede o refresh da tela
        modal.style.display = "block";
      }

       //fechando o modal
       function closeModal(e){
        
        modalContent.classList.add("slide-up");
        
        setTimeout(()=>{
            modal.style.display = "none";
            modalContent.classList.remove("slide-up");
        }, 500);
        
      }