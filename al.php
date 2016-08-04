<?php
	$servername = "localhost";
	$username = "root";
	$password = "1902Anchit1@3";
	$dbname = "wordpress3";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "SELECT * FROM chatdata";
	$result = $conn->query($sql);

?>
{
	"result":[
		
<?php
	if ($result->num_rows > 0) {
	    // output data of each row
	    $f1=true;
	    while($row = $result->fetch_assoc()) {
    		if(!$f1){
				echo ',';
			}
	    	echo '{';
			$f1=false;
	        echo '"reply":[';
  	        $arr=explode(",", $row["reply"]);
  	        $f=true;
  	        foreach ($arr as $key) {
  	        	if(!$f){
					echo ',';
				}
				$f=false;
  	        	echo '"'.$key.'"';
  	        }
  	        echo '],
			"question":[';
				$f2=true;
				$q=$row["question"];
				$arr=explode(",", $q);
				foreach ($arr as $str) {
					if(!$f2){
						echo ',';
					}
					$f2=false;
					echo '"'.$str.'"';
				}
			echo ']}';
	    }
	} else {
	    echo "";
	}
	$conn->close();
?>
		
	]
}