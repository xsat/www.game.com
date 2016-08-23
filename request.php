<?php

header('Content-Type: application/json');

$data = [];

if (isset($_POST['type'])) {
    switch ($_POST['type']) {
        case 'load':
            $data = [
                'currentPlayer' => [
                    'title' => 'Player1',
                    'selector' => 'left',
                    'health' => 20,
                    'moves' => 5,
                    'score' => 0,
                    'active' => true,
                ],
                'opponentPlayer' => [
                    'title' => 'Player2',
                    'selector' => 'right',
                    'health' => 100,
                    'moves' => 3,
                    'score' => 1,
                    'active' => false,
                ],
            ];
            break;
    }
}

echo json_encode($data);