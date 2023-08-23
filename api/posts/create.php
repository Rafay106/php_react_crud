<?php

// HEADERS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-ALlow-Methods: POST');
header('Access-Control-ALlow-Headers: Access-Control-ALlow-Headers,Content-Type,Access-Control-ALlow-Methods,Authorization,X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Post.php';

$database = new Database();
$db = $database->connect();

$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

if ($data->title == '' || $data->body == '' || $data->author == '' || $data->category_id == '' || $data->category_id == '0') {
    echo json_encode(array('message' => 'All fields are required!'));
    return;
}


$post->title = $data->title;
$post->body = $data->body;
$post->author = $data->author;
$post->category_id = $data->category_id;

// Create post
try {
    if ($post->create())
        echo json_encode(array('message' => 'Post Created'));
    else
        echo json_encode(array('message' => 'Post Not Created'));
} catch (PDOException $e) {
    echo json_encode(array('message' => 'Internal Server Error'));
}
