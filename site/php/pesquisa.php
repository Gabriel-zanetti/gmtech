
<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type:' . "text/plain");

$dbHost      =  'localhost' ; 
$dbUsername  =  'root' ; 
$dbPassword  =  'fla?flu123' ; 
$dbName      =  'gmtech' ; 
$db  = new  mysqli( $dbHost ,  $dbUsername ,  $dbPassword ,  $dbName ); 
if ( $db -> connect_error ) {
 echo ("<script>erro.N400('sem coneccao ao banco ');</script>");
 } else{

$pesquisa = $_POST['tag'];
$inicio= $_POST['inicio'];
$limite= $_POST['limite'];
$L1 =$limite;
$L0 =$inicio;
$query  =  $db->query("SELECT `id`, `nome`, `descricao`, `valorvista`, `parcelado`, `midia`, `tag`, `data` FROM `produtos` WHERE `tag` LIKE '%$pesquisa%' AND `id`>=$L0 AND `id`<=$L1");


   while($dados= $query->fetch_assoc()){

  echo ("<script>pesquisa.repasse('".$dados["id"]."','".$dados["nome"]."','".$dados["descricao"]."','".$dados["valorvista"]."','".$dados["parcelado"]."','".$dados["midia"]."');</script>");   
       }
   }

   ?>
