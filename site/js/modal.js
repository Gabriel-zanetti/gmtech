var modal ={
    modal:function(nome,id,midia){
    $("#modaltop").html(`
    <h5 class="modal-title" id="staticBackdropLabel">
    <img src="https://docs.google.com/uc?id=`+midia+`" width="50" alt="">`+nome+`</h5>
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"><h5>X</h5> </button>
     `);
     $("#modalbotao").html(`
     <a type="button" class="btn" href="tel:028999280287" target="_blank"  onclick="modal.verifica()"><img src="midia/icones/icone/telefone.png"  width="50" alt=""></a>
     <a type="button" class="btn" href="mailto:gmtechseguranca@gmail.com?Subject=`+nome+`%20da%20`+nome+` id=`+id+`" target="_blank" onclick="modal.verifica()"><img src="midia/icones/icone/email.jpg" width="50" alt=""></a>    
     <a type="button" class="btn" href="https://api.whatsapp.com/send?phone=5528999280287&text=`+nome+`%20id%3D`+id+`%20" target="_blank" onclick="modal.verifica()"><img src="midia/icones/icone/zap.png" width="50" alt=""></a>
   `);

    },
    verifica:function(){
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
            console.log('celular');

        }else{
            console.log("pc");
            $("#modalcentro").html(`
            <h5>Esses são os nossos contatos:</h5>
            <ul>
              <li><img src="midia/icones/icone/telefone.png" width="50" alt="">(28) 99928-0287</li>
              <li><img src="midia/icones/icone/email.png" width="50" alt="">Gmtechseguranca@gmail.com</li>
              <li><img src="midia/icones/icone/zap.png" width="50" alt="">(28) 99928-0287</li>
              </ul>
            <h5>Estamos te aguardado ansiosamente!</h5>
            `);

        }
       
    }
};
