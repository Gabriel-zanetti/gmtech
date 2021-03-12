var pesquisa ={
    complete:function(){
        $('#inputPesquisa').keyup(function(){pesquisa.tag( $("#inputPesquisa").val(),0,10)});

    },
	tagString:'',
    tag:function(tag, inicio, limite){
        var url = "../php/pesquisa.php";
		$.ajax({
			url: url,
			type: 'POST' ,            
			cache: false,
			dataType: "html",
            data: {tag:tag, inicio:inicio, limite:limite}, 
			beforeSend: function() {

				$("#corpo").html('<img src="midia/icones/icone/carrega.gif" id="gif" alt="carregando">');
			},
			error: function() {
			},
			success: function(dados) {
				$("#corpo").html("");					
				$('body').append(dados); 
				

			}
		

		});
		if(tag!=pesquisa.tagString){
		 pesquisa.pagina(tag);
		 pesquisa.tagString=tag;
		}
    },
    repasse:function(id, nome, descricao, valorvista, parcelado, midia){
        console.log(id, nome, descricao, valorvista, parcelado, midia);
	   $("#corpo").append(` 
	   <div class="card justify-content-center" >
		<img src="midia/icones/titulo/`+midia+`"  class="card-img-top" alt="...">
		<div class="card-body">
		<h6 class="card-title">`+nome+`</h6>
		<p class="card-text">`+descricao+`</p>
		<p class="card-text"><b>R$ </b>`+valorvista+`</p>
		</div>
	    <div class="navbar justify-content-center negocia"> <a href="#" class="btn btn-outline-success" data-bs-toggle="modal" onclick="modal.modal('`+nome+`','`+id+`','`+midia+`')" data-bs-target="#staticBackdrop"> #Negociar</a></div>
	    </div>
        `);

    },
	pagina:function(tag){
		var url = "../php/pagina.php";
		$.ajax({
			url: url,
			type: 'POST' ,            
			cache: false,
			dataType: "html",
            data: {tag:tag}, 
			beforeSend: function() {
								
			},
			error: function() {
			},
			success: function(dados) {
				$("#pagina").html("");
			
			$('body').append(dados); 
				

			}

		});


	},
	
  	repassepagina:function(qtd){
		var n = 0;
		var y = 0;
		var i = 1;
		if(qtd>10){
		for(n;n<qtd;){
		n=n+10;
		if(n>=qtd){		
		$("#pagina").append(`<li class="page-item"><a class="page-link p`+i+`" onclick="pesquisa.tag('`+pesquisa.tagString+`',`+(n-10)+`,`+qtd+`),pesquisa.paginaCss(`+i+`)">`+i+`</a></li>`);	
		   console.log((n-10),(qtd));
		}else{
			$("#pagina").append(`<li class="page-item"><a class="page-link p`+i+`" onclick="pesquisa.tag('`+pesquisa.tagString+`',`+(n-10)+`,`+n+`),pesquisa.paginaCss(`+i+`)">`+i+`</a></li>`);	
			console.log((n-10),(n));
		   }
		i=i+1;	

		}
		pesquisa.paginaCss(1);
	 }

	},
	paginaCss:function(n){
		$('.page-link').css('background','#fff');
		$('.p'+n).css('background','#111');

	}
};
