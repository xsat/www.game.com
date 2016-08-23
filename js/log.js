var Log = function() {
    var self = this;
    
    self.selector = '.log .records';
    self.messages = {
        start: 'Game started',
        end: 'Game ended',
        move: '%player% moved from %from% to %to%',
        attack: '%player% attacked %to%',
        shield: '%player% shielded on %from%',
        block: '%layer% blocked on %from%',
        skip: '%player% skipped on %from%',
        damage: '%player% damaged on %to%'
    };
    
    self.addMessage = function(act, player) {
        $(self.selector).prepend(self.getHtml(act, player));
    };
    
    self.getHtml = function(act, player) {
        return '<div class="record">' +
                    '<span class="time">' +
                        self.getTime() +
                    '</span> ' +
                    self.getMessage(act, player) +
                '<div>';
    };
    
    self.getTime = function() {
        var date = new Date();
        return self.addZero(date.getHours()) + ':' + self.addZero(date.getMinutes()) + ':' + self.addZero(date.getSeconds());
    };
    
    self.addZero = function(value) {
        if (value < 9) {
            return '0' + value;
        }    
        
        return value;
    };
    
    self.getMessage = function(act, player) {
        var message = self.messages[act.type]; 
        
        if (typeof(player) == 'object' && player && typeof(player.title) == 'string') {
            message = self.replaceValue(message, 'player', player.title);
        }
        
        if (typeof(act) == 'object' && act && typeof(act.from) == 'object') {
            message = self.replaceValue(message, 'from', self.getPositionHtml(act.from));
        }
        
        if (typeof(act) == 'object' && act && typeof(act.to) == 'object') {
            message = self.replaceValue(message, 'to', self.getPositionHtml(act.to));
        }
        
        return message;
    };
    
    self.replaceValue = function(message, key, value) {
        return message.replace(new RegExp('(%' + key + '%)', 'ig'), value);
    };
    
    self.getPositionHtml = function(position) {
        return '<span class="position" row="' + position.row + '" cell="' + position.cell + '">' +
                    position.row + ':' + position.cell +
               '</span>';
    };
};