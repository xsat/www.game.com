var Player = function(title, selector, health, moves, score, active) {
    var self = this;
    self.title = title || '';
    self.selector = '.player.' + selector;
    self.health = (health || 100);
    self.moves = moves || 5;
    self.score = score || 0;
    self.active = active || false;
    self.hero = new Hero(selector);
    
    self.selectors = {
        health: self.selector + ' > .info > .health',
        moves: self.selector + ' > .info > .moves',
        bar: self.selector + ' > .health',
        title: self.selector + ' > .title',
        score: self.selector + ' > .score'
    };
    
    self.update = function() {
        self.updateHealth();
        self.updateMoves();
        self.updateTitle();
        self.updateScore();
        self.updateActive();
    };
    
    self.setHealth = function(health) {
        self.health = health;
        self.updateHealth();
    };  
    
    self.updateHealth = function() {
        $(self.selectors.health).html(self.health + "%");
        $(self.selectors.bar).css({width: self.health + "%"});
    };
    
    self.setMoves = function(moves) {
        self.moves = moves;
        self.updateMoves();
    };  
    
    self.updateMoves = function() {
        $(self.selectors.moves).html(self.moves);
    };  
    
    self.setTitle = function(title) {
        self.title = title;
        self.updateTitle();
    };  
    
    self.updateTitle = function() {
        $(self.selectors.title).html(self.title);
    };  
    
    self.setScore = function(score) {
        self.score = score;
        self.updateScore();
    };
    
    self.updateScore = function() {
        $(self.selectors.score).html(self.score);
    };
    
    self.setActive = function(active) {
        self.active = active;
        self.updateActive();
    };
    
    self.updateActive = function() {
        var $item = $(self.selector);
        
        if (self.active) {
            $item.removeClass('disable');
        } else {
            $item.addClass('disable');
        }
    };
};