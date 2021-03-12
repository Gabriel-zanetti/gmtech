var db ={
	Cadastrar: function(){
		var ar=db.arquivo;
		var nome = $("#nome").val();
		var sobrenome = $("#sobrenome").val();
		var email = $("#email").val();
		var senhaUsuario = $("#senha").val();
		var senhaConfirmacao = $("#senhaConfirmacao").val();
		var cpf = $("#cpf").val();
		var estado = $("#estado").val();
		var cidade = $("#cidade").val();
		var bairro = $("#bairro").val();
		var rua = $("#rua").val();
		var numero = $("#numero").val();   
		var telefone = $("#celular").val();
		var telefoneFixo = $("#fixo").val();
		var cep = $("#cep").val();
		var termos = $("#check").is(':checked');
		if (nome == "" || sobrenome == "" || email == "" || senhaUsuario == "" || senhaConfirmacao == "" || cpf == "" ||  estado == "" ||  cidade == "" || bairro == "" ||  rua == "" ||  numero == "" || telefone == "" || cep == "" || termos == false ){
			console.log("campos vazio");
			if ($("#nome").val()==""){
				$("#nome").css("background","#f63");
			}else{
				$("#nome").css("background","#fff");
				if ($("#sobrenome").val()==""){
					$("#sobrenome").css("background","#f63");
				}else{
					$("#sobrenome").css("background","#fff");
					if ($("#email").val()==""){
						$("#email").css("background","#f63");
					}else{
						$("#email").css("background","#fff");
						if ($("#senha").val()==""){
							$("#senha").css("background","#f63");
						}else{
							$("#senha").css("background","#fff");
							if ($("#senhaConfirmacao").val()==""){
								$("#senhaConfirmacao").css("background","#f63");
							}else{
								$("#senhaConfirmacao").css("background","#fff");
								if ($("#cpf").val()==""){
									$("#cpf").css("background","#f63");
								}else{
									$("#cpf").css("background","#fff");
									if ($("#celular").val()==""){
										$("#celular").css("background","#f63");
									}else{
										$("#celular").css("background","#fff");
										if ($("#cep").val()==""){
											$("#cep").css("background","#f63");


										}else{
											$("#cep").css("background","#fff");
											if ($("#estado").val()==""){
												$("#estado").css("background","#f63");
											}else{
												$("#estado").css("background","#fff");
												if ($("#cidade").val()==""){
													$("#cidade").css("background","#f63");
												}else{
													$("#cidade").css("background","#fff");
													if ($("#bairro").val()==""){
														$("#bairro").css("background","#f63");
													}else{
														$("#bairro").css("background","#fff");
														if ($("#rua").val()==""){
															$("#rua").css("background","#f63");
														}else{
															$("#rua").css("background","#fff");
															if ($("#numero").val()==""){
																$("#numero").css("background","#f63");


															}else{
																console.log($("#check").is(':checked'));
																if($("#check").is(':checked')!=true){
																	$("#termos").css("background","#f63");	
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}

		}else{
			if (senhaUsuario == senhaConfirmacao) {
				var url = app.urlServePhp+"cadastrar.php";

				$.ajax({
					url: url,
					type: 'POST' ,            
					data: {
						arquivo:ar,
						nome:nome,
						sobrenome:sobrenome,      
						email:email,
						senha:senhaUsuario,
						cpf:cpf,
						estado:estado,
						cidade:cidade, 
						bairro:bairro,
						rua:rua,
						numero:numero,
						cep:cep,
						telefone:telefone,
						telefoneFixo:telefoneFixo,						

					},
					cache: false,
					dataType: "html",
					beforeSend: function() {
						
					},
					error: function() {

					},
					success: function(dados) {
						$('body').html(dados); 
						window.location.reload();
					}   
				});
			}else{
				$("#senhaConfirmacao").css("background","#f00");
				error.N400('senhas diferentes');
			}
		}  
	},
	verificarLogin: function(){
		var url = app.urlServePhp+"verificarLogin.php";
		$.ajax({ 
			url: url,
			type: 'POST' ,            
			cache: false,
			dataType: "html",

			error: function() {
			},
			success: function(dados) {   
				$('body').append(dados);  }        
			});

	},

	logar: function(){
		email = $("#email").val();
		senha = $("#senha").val();
		var url = app.urlServePhp+"logar.php";
		if (email == "" || senha == ""){
			if ($("#email").val()==""){
				$("#email").css("background","#f63");
			}else{
				$("#email").css("background","#fff");
				if ($("#senha").val()==""){
					$("#senha").css("background","#f63");
				}
			}
		}else{           
			$.ajax({
				url: url,
				type: 'POST' ,            
				data: {email:email , senha:senha},
				cache: false,
				dataType: "html",
				beforeSend: function() {
					$("#app").html(`<center><div class="col-md-8"> <img src="img/carregar2.gif" class="card-img" style= "width:80%;"></div></center>`);
				},
				error: function() {
				},
				success: function(dados) {
					$('body').append(dados); 
					window.location.reload();

				}

			});
		}

	},
	sair:function(){
		var url = app.urlServePhp+"sair.php";
		$.ajax({
			url: url,
			type: 'POST' ,            
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$("#app").html(`<center><div class="col-md-8"> <img src="img/carregar2.gif" class="card-img" style= "width:80%;"></div></center>`);
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				window.location.reload();

			}

		});
		
	},
	pesquisa: function(){
		var url = app.urlServePhp+"pesquisa.php";
		$.ajax({
			url: url,
			type: 'POST' ,            
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$("#app").html(`<center><div class="col-md-8"> <img src="img/carregar2.gif" class="card-img" style= "width:80%;"></div></center>`);
			},
			error: function() {
			},
			success: function(dados) {
				$("#app").html("");					
				$('body').append(dados); 
				

			}

		});


	},
	detalhesProdutos: function(idProduto, idFornecedor){
		var url = app.urlServePhp+"detalhesProduto.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {idProduto:idProduto, idFornecedor:idFornecedor},          
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$("#app").html(`<center><div class="col-md-8"> <img src="img/carregar2.gif" class="card-img" style= "width:80%;"></div></center>`);
			},
			error: function() {
			},
			success: function(dados) {
				$("#app").html("");
				$('body').append(dados); 

			}

		});

	},
	fornecedor: function(idFornecedor, idProduto){
		var url = app.urlServePhp+"fornecedor.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {idProduto:idProduto, idFornecedor:idFornecedor},          
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$("#app").html(`<center><div class="col-md-8"> <img src="img/carregar2.gif" class="card-img" style= "width:80%;"></div></center>`);
			},
			error: function() {
			},
			success: function(dados) {
				$("#app").html("");
				$('body').append(dados); 
				
			}

		});
	},

	transportadora : function(idFornecedor, idProduto){
		var url = app.urlServePhp+"transportadora.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {idProduto:idProduto, idFornecedor:idFornecedor},          
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$("#app").html(`<center><div class="col-md-8"> <img src="img/carregar2.gif" class="card-img" style= "width:80%;"></div></center>`);
			},
			error: function() {
			},
			success: function(dados) {
				$("#app").html("");
				$('body').append(dados); 
				
			}

		});

	},
	freteCompra: function(idFornecedor, idProduto){
		var url = app.urlServePhp+"freteCompra.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {idProduto:idProduto, idFornecedor:idFornecedor},          
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$("#app").html(`  
					<div class="card" style="width:30rem;">

					<div class="card-body">
					<span class="badge badge-light">CALCULAR FRETE </span>
					<br><br>
					<div class="btn-group" role="group" aria-label="Basic example">
					<div class="form-group col-md-8">
					<label for="transportadora"><span class="badge badge-light">Transportadora</span></label>
					<select  class="form-control" id="transportadora">
					
					</select>
					
					</div>
					<div class="form-group col-md-8">
					<label for="margemFrete"><span class="badge badge-light">Tipo de entrega</span></label>
					<select class="form-control" id="margemFrete">
					</select>
					</div>
					</div>
					<div class="form-group col-md-5">
					<label for="quantidade"><span class="badge badge-light">Chapas</span></label>
					<input type="number"  value=" " class="form-control" id="quantidade">
					</div>

					<nav id="total"></nav>
					<br><br>
					
					<ul class="nav" style="margin-left:2.3%;" >
					
					<li class="nav-item" style="margin-left:4.3%;"  >
					<div class="form-group col-md-5">
					<label for="voltar">Voltar</label>

					<a class="nav-link" target="_self" id="voltar" onclick="db.detalhesProdutos(`+idProduto+`,`+idFornecedor+`)"><img src="img/voltar.png" style="height:30px; width:30px;" ></a>
					</div>
					</li>
					<li class="nav-item" id="finalizar" style="margin-left:30.3%;" >
					</li>


					</ul>
					</div></div>

					<script>
					$("#quantidade").keydown(function(e) {

						db.taxaFrete($('#margemFrete').val());


					});
					$('#transportadora').change(function(){
						db.margemFrete($(this).val());
					});
					$('#margemFrete').change(function(){
						db.taxaFrete($(this).val());
					});

					</script>


					`);

			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},
	margemFrete: function(idTransportadora){
		var url = app.urlServePhp+"margemFrete.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {idTransportadora:idTransportadora},          
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$('#margemFrete').html('');
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},
	taxaFrete:function(margem){
		var url = app.urlServePhp+"taxaFrete.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {margem:margem },          
			cache: false,
			dataType: "html",
			beforeSend: function() {

			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},

	calcularFrete : function(margem, taxaEstadual, taxaRegional, taxaKm){
		var taxaGlobal = 0 ;
		if (transporte.estadoCliente==transporte.estadoFornecedor) {
			taxaGlobal = Number(taxaRegional);
		}else{
			taxaGlobal = (Number(taxaRegional)+Number(taxaEstadual));
		}
		console.log(taxaGlobal);
		var destination = transporte.cidadeCliente+" - " + transporte.estadoCliente;
		var origin = transporte.cidadeFornecedor+" - "+transporte.estadoFornecedor ;   //$("#destination").val() ;//+ ", Curitiba - PR, Brasil";
		var service = new google.maps.DistanceMatrixService;
		service.getDistanceMatrix({
			origins: [origin],
			destinations: [destination],
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.METRIC,
			avoidHighways: false,
			avoidTolls: false
		}, function(response, status) {

			if (status == "OK") {
				transporte.quantidade =  $('#quantidade').val() ;

				//KM price
				var precoPorKM = Number(taxaKm);
        		//meter to kilometer conversion
        		var distancia = response.rows[0].elements[0].distance.value;
        		var distanciaKM = (distancia/1000);
        		var preco = (((Math.ceil(Number(distanciaKM)) * Number(precoPorKM)).toFixed(2))* $('#quantidade').val());		
        		console.log(response);
        		console.log(taxaKm, preco);

        		$('#total').html(
        			"<li class='list-group-item'><strong>Origem</strong>: " + response.originAddresses[0] + "</li>"
        			+ "<li class='list-group-item'><strong>Destino</strong>: " + response.destinationAddresses[0] + "</li>"
        			+ "<li class='list-group-item'><strong>Distância</strong>: " + response.rows[0].elements[0].distance.text + "</li>"
        			+ "<li class='list-group-item'><strong>Duração</strong>: " + response.rows[0].elements[0].duration.text + "</li>"
        			+ "<li class='list-group-item' id='ch'><strong>Chapas</strong>: " + transporte.quantidade + "</li>"
        			+ "<li class='list-group-item list-group-item-success'><strong>Preço</strong>: " +(preco+Number(taxaGlobal))+ "</li>");
        		transporte.idMargem = margem;
        		transporte.preco = Number(preco+Number(taxaGlobal));
        		venda.precoTotal = ((transporte.quantidade*produtos.preco)+transporte.preco);
        		$("#finalizar").html(`
        			<div class="form-group col-md-8" style="">
        			<label for="finalizar">Proximo</label>
        			<a class="nav-link "  onclick="db.verificarQuantidade(`+transporte.idMargem+`,`+transporte.idProduto+`,`+transporte.idFornecedor+`,`+transporte.preco+`,`+transporte.quantidade+`,'`+destination+`','`+origin+`','`+ produtos.titulo+`')"  target="_self"  tabindex="-1" ><img src="img/compra.png" style="height:30px; width:30px;" ></a>
        			</div>
        			`);
        	} else {
        		$('#litResultado').html('Ocorreu um erro');
        	}   
        }
        );


	},

	verificarQuantidade: function(idMargem, idProduto, idFornecedor, preco, quantidade, destination,origin, titulo){
		//venda.confirmarVenda(`+transporte.idMargem+`,`+transporte.idProduto+`,`+transporte.idFornecedor+`,`+transporte.preco+`,`+transporte.quantidade+`,'`+destination+`','`+origin+`','`+ produtos.titulo+`')"

		var url = app.urlServePhp+"verificarQuantidade.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {idMargem:idMargem, preco:preco, idProduto:idProduto, idFornecedor:idFornecedor, quantidade:quantidade, destination:destination, origin:origin, titulo:titulo},          
			cache: false,
			dataType: "html",
			beforeSend: function() {
				
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});
	},
	finalizarVenda: function(idMargem, preco, idProduto, idFornecedor, quantidade,precoProduto){
		var url = app.urlServePhp+"finalizarVendas.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {idMargem:idMargem, preco:preco, idProduto:idProduto, idFornecedor:idFornecedor, quantidade:quantidade, precoProduto:precoProduto},          
			cache: false,
			dataType: "html",
			beforeSend: function() {
				
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},
	statusCarrinho:function(){
		var url = app.urlServePhp+"statusCarrinho.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			cache: false,
			dataType: "html",
			beforeSend: function() {
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});



	},













	status:function(tipo){
		var tipo = tipo;
		var url = app.urlServePhp+"status.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			data: {tipo:tipo},
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$("#app").html("");
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});



	},
	arquivo:"",
	arquivoAndamento:"",
	upload: function(){
		this.arquivoAndamento = true;
		var url = app.urlServePhp+"upload.php";
		$(".progress").show();
		$("#upload").ajaxForm({
			uploadProgress:function(event,position,total,percentComplet){
				var tamalhoArquivo = total/1000000;
				if (tamalhoArquivo <=50) {
					
					$("#statusPercentual").css("width",percentComplet+"%");

				}else{
					window.location.reload();
				}

			},
			success: function(dados){
				this.arquivoAndamento = false;
				db.arquivo=dados.msg;
				$("#botaoup").hide();
				$("#labelUpload").html("concluido");
				//$("#arquivoup").html(`<iframe src="php/upload/`+db.arquivo+`"></iframe>`);

			},
			error:function(erro){
				//$("#statusPercentual").text(erro);

			},
			url: url,
			type: 'POST' ,  
			resetForm:true,
			dataType: "json"

		}).submit();

	},
	increverTranporte:function(){
		var cnpj = $("#cnpj").val();
		var ar = db.arquivo;

		var url = app.urlServePhp+"inscreverTransportadora.php";
		$.ajax({
			url: url,
			data:{cnpj:cnpj , arquivo:ar},
			type: 'POST' ,  
			cache: false,
			dataType: "html",
			beforeSend: function() {
				
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},
	increverFornecedor:function(){
		var cnpj = $("#cnpj").val();
		var ar = db.arquivo;
		var url = app.urlServePhp+"inscreverfornecedor.php";
		$.ajax({
			url: url,
			data:{cnpj:cnpj , arquivo:ar},
			type: 'POST' ,  
			cache: false,
			dataType: "html",
			beforeSend: function() {
				
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},
	transporte_verificar:function(){
		var url = app.urlServePhp+"verificartransporte.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			cache: false,
			dataType: "html",
			beforeSend: function() {
				
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},
	fornecedor_verificar:function(){
		var url = app.urlServePhp+"verificarfornecedor.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			cache: false,
			dataType: "html",
			beforeSend: function() {
				
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},
	informacoesUser:function(){
		var url = app.urlServePhp+"informacoesParaEditar.php";
		$.ajax({
			url: url,
			type: 'POST' ,  
			cache: false,
			dataType: "html",
			beforeSend: function() {
				
			},
			error: function() {
			},
			success: function(dados) {
				$('body').append(dados); 
				
			}

		});

	},
	editarUsuario: function(id,idLocalizacao){
		console.log ( id,idLocalizacao );
		var idU=id;
		var idL=idLocalizacao;
		var ar=db.arquivo;
		var nome = $("#nome").val();
		var sobrenome = $("#sobrenome").val();
		var email = $("#email").val();
		var senhaUsuario = $("#senha").val();
		var senhaConfirmacao = $("#senhaConfirmacao").val();
		var cpf = $("#cpf").val();
		var estado = $("#estado").val();
		var cidade = $("#cidade").val();
		var bairro = $("#bairro").val();
		var rua = $("#rua").val();
		var numero = $("#numero").val();   
		var telefone = $("#celular").val();
		var telefoneFixo = $("#fixo").val();
		var cep = $("#cep").val();
		if (nome == "" || sobrenome == "" || email == "" || senhaUsuario == "" || senhaConfirmacao == "" || cpf == "" ||  estado == "" ||  cidade == "" || bairro == "" ||  rua == "" ||  numero == "" || telefone == "" || cep == ""  ){
			console.log("campos vazio");
			if ($("#nome").val()==""){
				$("#nome").css("background","#f63");
			}else{
				$("#nome").css("background","#fff");
				if ($("#sobrenome").val()==""){
					$("#sobrenome").css("background","#f63");
				}else{
					$("#sobrenome").css("background","#fff");
					if ($("#email").val()==""){
						$("#email").css("background","#f63");
					}else{
						$("#email").css("background","#fff");
						if ($("#senha").val()==""){
							$("#senha").css("background","#f63");
						}else{
							$("#senha").css("background","#fff");
							if ($("#senhaConfirmacao").val()==""){
								$("#senhaConfirmacao").css("background","#f63");
							}else{
								$("#senhaConfirmacao").css("background","#fff");
								if ($("#cpf").val()==""){
									$("#cpf").css("background","#f63");
								}else{
									$("#cpf").css("background","#fff");
									if ($("#celular").val()==""){
										$("#celular").css("background","#f63");
									}else{
										$("#celular").css("background","#fff");
										if ($("#cep").val()==""){
											$("#cep").css("background","#f63");


										}else{
											$("#cep").css("background","#fff");
											if ($("#estado").val()==""){
												$("#estado").css("background","#f63");
											}else{
												$("#estado").css("background","#fff");
												if ($("#cidade").val()==""){
													$("#cidade").css("background","#f63");
												}else{
													$("#cidade").css("background","#fff");
													if ($("#bairro").val()==""){
														$("#bairro").css("background","#f63");
													}else{
														$("#bairro").css("background","#fff");
														if ($("#rua").val()==""){
															$("#rua").css("background","#f63");
														}else{
															$("#rua").css("background","#fff");
															if ($("#numero").val()==""){
																$("#numero").css("background","#f63");


															}else{
																
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}

		}else{
			if (senhaUsuario == senhaConfirmacao) {
				var url = app.urlServePhp+"editarUsuario.php";

				$.ajax({
					url: url,
					type: 'POST' ,            
					data: {
						id:idU,
						idLocalizacao:idL,
						arquivo:ar,
						nome:nome,
						sobrenome:sobrenome,      
						email:email,
						senha:senhaUsuario,
						cpf:cpf,
						estado:estado,
						cidade:cidade, 
						bairro:bairro,
						rua:rua,
						numero:numero,
						cep:cep,
						telefone:telefone,
						telefoneFixo:telefoneFixo,						

					},
					cache: false,
					dataType: "html",
					beforeSend: function() {
						
					},
					error: function() {

					},
					success: function(dados) {
						$('body').html(dados); 
						window.location.reload();
					}   
				});
			}else{
				$("#senhaConfirmacao").css("background","#f00");
				error.N400('senhas diferentes');
			}
		}  
	},
	like: function(){
		var tipo = consulta.tipoPesquisar;
		if (tipo == "Produtos e Empresas") {
			var url = app.urlServePhp+"linkTudo.php";
		}else{
			if ( tipo == "Produtos") {
				var url = app.urlServePhp+"link.php";
			}else{
				if (tipo == "Empresas") {
					var url = app.urlServePhp+"linkEmpresa.php";
				}else{
					

					window.location.reload();

				}

			}
		}
		
		var l1 =  $("#pesquisa").val();
		$.ajax({
			url: url,
			type: 'POST' ,   
			data:{likeP:l1 , likeS:tipo},      
			cache: false,
			dataType: "html",
			beforeSend: function() {
				$("#app").html(`<center><div class="col-md-8"> <img src="img/carregar2.gif" class="card-img" style= "width:80%;"></div></center>`);
			},
			error: function() {
			},
			success: function(dados) {
				$("#app").html("");					
				$('body').append(dados); 
				

			}

		});


	},

};