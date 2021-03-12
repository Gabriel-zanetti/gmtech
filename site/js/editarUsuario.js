var editar ={
	tela:function ( id,nome, sobrenome, email, telefone, tel_fixo, cpf, img, codigoLocalizacao, estado , cidade, bairro, rua, numero, cep ) {
       console.log ( id,codigoLocalizacao );
       $('body').css("background","#333");
       $('body').html(`
        <div class="needs-validation" style="color:#aaa;background:#444; margin-left:6%; width: 90%;  margin-top:6%;"> 
        <button type="button" onclick="window.location.reload()" style="margin-right:-278px;" class="btn btn-danger">x</button>
        <br><br>
        <center style=" margin-left:6%; width: 90%;  ">
        <div class="form-row" >
        <div class="col-md-12 mb-5">
        <label for="nome">Editar Usuario</label>
        </div>
        </div>
        <fieldset>

        <div class="form-row" >
        <div class="col-md-2 mb-3">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" placeholder="nome" value="`+nome+`" required>
        </div>

        <div class="col-md-2 mb-3">
        <label for="sobrenome">Sobrenome</label>
        <input type="text" class="form-control" id="sobrenome" placeholder="sobrenome" value="`+sobrenome+`" required>

        </div>
        <div class="col-md-3 mb-3">
        <label for="email">Email</label>
        <div class="input-group">
        <div class="input-group-prepend">
        <span class="input-group-text">@</span>
        </div><input type="email" class="form-control" id="email" placeholder="Email" value="`+email+`" aria-describedby="inputGroupPrepend" required>
        </div>

        </div>
        <div class="col-md-2 mb-3">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" id="senha" placeholder="senha" required>
        </div>
        <div class="col-md-2 mb-3">
        <label for="senhaConfirmacao">Confirma senha</label>
        <input type="password" class="form-control" id="senhaConfirmacao" placeholder="Confirma senha" required>
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-2 mb-3">
        <label for="cpf">CPF</label>
        <input class="form-control" type="number" placeholder="999.999.999-99" id="cpf" value="`+cpf+`">
        </div>

        <div class="col-md-2 mb-3">
        <label for="celular">Telefone Celular</label>
        <input type="number" class="form-control" id="celular" placeholder="(+51 (28) 9999-8888)" value="`+telefone+`" required>
        </div>
        <div class="col-md-2 mb-3">
        <label for="fixo">Telefone fixo </label>
        <input type="number" class="form-control" id="fixo" placeholder="(nao obrigatorio)"  value="`+tel_fixo+`" required>
        </div>

        <div class="col-md-2 mb-3">
        <label for="cpf">CEP</label>
        <input class="form-control" type="number" placeholder="9999.9999" id="cep" value="`+cep+`">
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-2 mb-3">
        <label for="estado">Estado</label>
        <select class="form-control" id="estado" >
        <option value="`+estado+`">`+estado+`</option>
        </select>
        </div>
        <div class="col-md-2 mb-3">
        <label for="cidade">Cidade</label>
        <select class="form-control" id="cidade" >
        <option value="`+cidade+`">`+cidade+`</option>
        </select>

        </div><div class="col-md-4 mb-3">
        <label for="bairro">Bairro</label>
        <input type="text" class="form-control" id="bairro" placeholder="bairro" value="`+bairro+`" required>
        </div>
        <div class="col-md-3 mb-2">
        <label for="rua">Rua</label>
        <input type="text" class="form-control" id="rua" placeholder="rua" value = "`+rua+`" required>
        </div>
        <div class="col-md-1 mb-1">
        <label for="numero">Numero</label>
        <input type="number" class="form-control" id="numero" placeholder="99" value="`+numero+`" required><br>
        </div>


        <form  action="" method="post" id="upload" enctype="multipart/form-data"> 
       
        <ul class="nav">

        <li class="nav-item" id="arquivoup">
        <img src="php/upload/`+img+`" style="height:200px; width:200px;">

        </li>
        <li class="nav-item">

        <label for='arquivo' id="labelUpload"  class="form-control" style="background-color: #444; border:none; color: #fff; cursor: pointer;  margin: 0px; "><img src="img/upload.png" style="height:30px; width:120px;"></label>
        <input  name="arquivo" id="arquivo"  type='file' style="display: none;">
        <div class="progress" style="width:120px; margin-left:10px;">
        <div class="progress-bar" id="statusPercentual" role="progressbar" style="width: 0%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </li>
        </ul>
       
        </form>

        <script>
        $('input:file').change(function () {
            db.upload();
            editar.trocarImg();
        });
        </script>


        </fieldset>
         <div class="form-row" style="margin-left:0rem;">
        <div class="col-md-8 mb-8">
         <button  class="btn btn-primary" onclick="db.editarUsuario(`+id+`,`+codigoLocalizacao+`)">Editar</button>
        </div>
        </div>
      

        </center>
       
      
           
        <br>
        </div>
        <style>
        label{ margin-bottom:20px; }
        label, 
        select{ display:block; }
        </style>





        `);
$('.progress').hide();
$("#estado").mouseover(function(){
 editar.montaUF('br');
});

},
montaCidade: function (estado, pais){
  $.ajax({
    type:'GET',
    url:'http://api.londrinaweb.com.br/PUC/Cidades/'+estado+'/'+pais+'/0/10000',
    contentType: "application/json; charset=utf-8",
    dataType: "jsonp",
    async:false
}).done(function(response){
    cidades='';

    $.each(response, function(c, cidade){

      cidades+='<option value="'+cidade+'">'+cidade+'</option>';

  });

    // PREENCHE AS CIDADES DE ACORDO COM O ESTADO
    $('#cidade').html(cidades);

});

},









trocarImg:function(){

   var nome_arquivo = $('input:file').val().split("\\").pop();
   var intervalo = setInterval(function(){ 

    if(nome_arquivo = db.arquivo){
        $("#arquivoup").html(`<img src="php/upload/`+db.arquivo+`" style="height:200px; width:200px;">`);
        clearInterval(intervalo);
    }else{
     $("#arquivoup").html(`<img src="img/carregar.gif" style="height:200px; width:200px;">`); 
 }
}, 1000);


},


montaUF: function (pais){
  $.ajax({
    type:'GET',
    url:'http://api.londrinaweb.com.br/PUC/Estados/'+pais+'/0/10000',
    contentType: "application/json; charset=utf-8",
    dataType: "jsonp",
    async:false
}).done(function(response){
    estados='';
    $.each(response, function(e, estado){

      estados+='<option value="'+estado.UF+'">'+estado.Estado+'</option>';

  });

    // PREENCHE OS ESTADOS BRASILEIROS
    $('#estado').html(estados);

    // CHAMA A FUNÇÃO QUE PREENCHE AS CIDADES DE ACORDO COM O ESTADO
    inscrever.montaCidade($('#estado').val(), pais);

    // VERIFICA A MUDANÇA NO VALOR DO CAMPO ESTADO E ATUALIZA AS CIDADES
    $('#estado').change(function(){
      inscrever.montaCidade($(this).val(), pais);
  });

});
},

};