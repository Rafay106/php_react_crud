<?php

// HEADERS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-ALlow-Methods: DELETE');
header('Access-Control-ALlow-Headers: Access-Control-ALlow-Headers,Content-Type,Access-Control-ALlow-Methods,Authorization,X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Post.php';

$database = new Database();
$db = $database->connect();

$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));
$post->id = $data->id;

// Update post
if ($post->delete())
    echo json_encode(array('message' => 'Post Deleted'));
else
    echo json_encode(array('message' => 'Post Not Deleted'));