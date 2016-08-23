var Game = function() {
    var self = this;
    
    self.selectors = {
        row: '.row',
        cell: '.cell'
    };

    self.init = function() {
        self.positionsInit();
        self.initServer();
        self.logInit();
        self.playersInit();
        self.controlsInit();
        self.eventsInit();
    };
    
    self.positionsInit = function() {
        $(self.selectors.row).each(function(i) {
            $(this).attr('position', i)
                .find(self.selectors.cell).each(function(i) {
                    $(this).attr('position', i);
                });
        });
    };

    self.initServer = function() {
        self.server = new Server();
    };

    self.logInit = function() {
        self.log = new Log();
        self.log.addMessage(new Act('start'));
    };

    self.playersInit = function() {
        self.server.load(function(data){
            self.createPlayer = function(player) {
                return new Player(player.title,
                                  player.selector,
                                  player.health,
                                  player.moves,
                                  player.score,
                                  player.active);
            };

            self.currentPlayer = self.createPlayer(data['currentPlayer']);
            self.currentPlayer.update();
            self.opponentPlayer = self.createPlayer(data['opponentPlayer']);
            self.opponentPlayer.update();
        });

        self.playersSwap = function() {
            var tempPlayer = self.opponentPlayer;
            self.opponentPlayer = self.currentPlayer;
            self.currentPlayer = tempPlayer;

            self.currentPlayer.setActive(true);
            self.opponentPlayer.setActive(false);
        }
    };

    self.controlsInit = function() {
        self.controls = new Controls();

        self.controls.addAct(new Act('move', 'Move', function(status) {
            console.log('click.move', status);
        }));
        self.controls.addAct(new Act('attack', 'Attack', function(status) {
            console.log('click.attack', status);
        }));
        self.controls.addAct(new Act('shield', 'Shield', function(status) {
            console.log('click.shield', status);
        }));
        self.controls.addAct(new Act('skip', 'Skip', function(status) {
            console.log('click.skip', status);
        }));

        self.controls.addAct(new Act('test_swap', 'TestSwap', false, function(status) {
            console.log('click.test_swap', status);

            self.playersSwap();
        }));

        self.controls.addAct(new Act('test_move', 'TestMove', false, function(status) {
            console.log('click.test_move', status);

            self.currentPlayer.hero.moveTo(new Position(0, 0))
        }));

        self.controls.addAct(new Act('test', 'Test', false, function(status) {
            console.log('click.test', status);

            self.server.send('/request.php', {});
        }));

        self.controls.init();
    };
    
    self.eventsInit = function() {
        $(self.selectors.row + ' ' + self.selectors.cell)
            .off('click.game')
            .on('click.game', function() {
                console.log(1);
            });
    };
};