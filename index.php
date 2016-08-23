<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Game</title>
        <link href="/css/styles.css" rel="stylesheet">
    </head>
    <body>
        <div class="top"></div>
        <div class="players">
            <div class="player left">
                <div class="info">
                    Health: <span class="health">100%</span> /
                    Moves: <span class="moves">5</span>
                </div>
                <div class="health" style="width: 100%"></div>
                <div class="title">Player1</div>
                <div class="score">0</div>
            </div>
            <div class="player right">
                <div class="info">
                    Health: <span class="health">100%</span> /
                    Moves: <span class="moves">5</span>
                </div>
                <div class="health" style="width: 100%"></div>
                <div class="title">Player2</div>
                <div class="score">0</div>
            </div>
        </div>
        <div class="content">
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
        </div>
        <div class="controls"></div>
        <div class="log">
            <div class="records"></div>
        </div>
        <div class="bottom"></div>
        <script src="/js/jquery-1.12.4.min.js"></script>
        <script src="/js/server.js"></script>
        <script src="/js/lang.js"></script>
        <script src="/js/hero.js"></script>
        <script src="/js/player.js"></script>
        <script src="/js/position.js"></script>
        <script src="/js/act.js"></script>
        <script src="/js/log.js"></script>
        <script src="/js/controls.js"></script>
        <script src="/js/game.js"></script>
        <script src="/js/main.js"></script>
    </body>
</html>