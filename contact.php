<?php
header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);
if (!$input || !isset($input['name'], $input['email'], $input['message'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid input.']);
    exit;
}
$name = htmlspecialchars($input['name']);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars($input['message']);
if (!$email) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email.']);
    exit;
}
// For demo, just return success
http_response_code(200);
echo json_encode(['status' => 'success', 'message' => 'Message received.']);
