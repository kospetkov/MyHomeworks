<?php 
error_reporting(E_ERROR | E_PARSE);

function validation($path_to_db) {
    $result = [
        'status' => 'ok',
        'error' => '',
        'password' => ''
    ];
    if (!file_exists($path_to_db)) {
        $file = file_put_contents($path_to_db, '[]');
        if (!$file) {
            $result['status'] = '';
            $result['error'] = 'The file ' . $path_to_db . ' is not exists';
            return $result;
        }
    }
    if (!is_writable($path_to_db)) {
        $response['status'] = '';
        $response['error'] = 'The file' . $path_to_db . 'recording is not possible';
        return $result;
    }
    return $result;
}
