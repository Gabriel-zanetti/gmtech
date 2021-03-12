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
$query  =  $db->query("SELECT count(*)AS`qtd`  FROM `produtos` WHERE tag LIKE '%$pesquisa%'");

   while($dados= $query->fetch_assoc()){    
    echo ("<script>pesquisa.repassepagina(".$dados["qtd"].");</script>");   
        
       }
   }
   ?>
