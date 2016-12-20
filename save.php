<?php

	// decode data sent with AJAX
	$data = json_decode(file_get_contents("php://input"));
	
	// decode initial JSON file
	$jsonData = json_decode(file_get_contents("to-do_list_data.json"));

	// add new data (decoded) to initial JSON file (decoded)
	$jsonData = $data;

	// encode everything back again
	$final_data = json_encode($jsonData);

	// UPDATE INITIAL JSON FILE
	if (file_put_contents('to-do_list_data.json', $final_data)) {

		echo 'file updated';
		
	} else {

		echo 'file NOT updated';

	}

?>