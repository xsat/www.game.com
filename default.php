<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Game</title>
        <link href="css/styles.css" rel="stylesheet">
    </head>
    <body class="loading">
        <div class="top"></div>
        <div class="players">
            <div class="player left">
                <div class="info">
                    Health: <span class="health">50%</span> /
                    Moves: <span class="moves">5</span>
                </div>
                <div class="health" style="width: 50%"></div>
                <div class="title">
                    Player1
                </div>
                <div class="score">
                    1
                </div>
            </div>
            <div class="player right disable">
                <div class="info">
                    Health: <span class="health">100%</span> /
                    Moves: <span class="moves">5</span>
                </div>
                <div class="health" style="width: 100%"></div>
                <div class="title">
                    Player2
                </div>
                <div class="score">
                    0
                </div>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div class="cell left">
                    <div class="left"></div>
                </div>
                <div class="cell left"></div>
                <div class="cell left"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
            </div>
            <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
            </div>
            <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
            </div>
            <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
            </div>
            <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
            </div>
            <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
            </div>
            <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell disable right"></div>
                <div class="cell disable right"></div>
                <div class="cell disable right">
                    <div class="right"></div>
                </div>
            </div>
        </div>
        <div class="controls">
            <div class="act active">
                Move
            </div>
            <div class="act disable">
                Attack
            </div>
            <div class="act disable">
                Shield
            </div>
            <div class="act">
                Skip
            </div>
        </div>
        <div class="log">
            <div class="records">
                <div class="record">
                    <span class="time">10:11:33</span> Game starts;
                </div>
                <div class="record left">
                    <span class="time">10:11:33</span> Player1 moves from <span class="position">0:0</span> to <span class="position">1:1</span>;
                </div>
                <div class="record right">
                    <span class="time">10:11:33</span> Player2 moves <span class="position">0:0</span> to <span class="position">1:1</span>;
                </div>
                <div class="record left">
                    <span class="time">10:11:33</span> Player1 atack <span class="position">0:0</span> to <span class="position">1:1</span>;
                </div>
                <div class="record right">
                    <span class="time">10:11:33</span> Player2 atack <span class="position">0:0</span> to <span class="position">1:1</span>;
                </div>
                <div class="record left">
                    <span class="time">10:11:33</span> Player1 moves <span class="position">0:0</span> to <span class="position">1:1</span>;
                </div>
                <div class="record right">
                    <span class="time">10:11:33</span> Player2 moves <span class="position">0:0</span> to <span class="position">1:1</span>;
                </div>
                <div class="record left">
                    <span class="time">10:11:33</span> Player1 atack <span class="position">0:0</span> to <span class="position">1:1</span>;
                </div>
                <div class="record right">
                    <span class="time">10:11:33</span> Player2 atack <span class="position">0:0</span> to <span class="position">1:1</span>;
                </div>
                <div class="record">
                    <span class="time">10:11:33</span> Game ends;
                </div>
            </div>
        </div>
        <div class="bottom"></div>
    </body>
</html>