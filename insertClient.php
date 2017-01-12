<?php
        include('db.php');
        
       
        $name = $_POST['name1'];
        $ndis = $_POST['ndis1'];
        $address = $_POST['address1'];
        $phone = $_POST['phone1'];
        $nok = $_POST['nok1'];
        $notes = $_POST['notes1'];
        $dob = $_POST['dob1'];
        
        if(mysqli_query($db, "INSERT INTO Clients (ndis,name,address,phone_number,next_of_kin,dob,notes) VALUES ('$ndis', '$name', '$address', '$phone', '$nok', '$dob', '$notes')"))
            echo "Sucessfull";
        else
            echo "FAIL";

?>
    
    
