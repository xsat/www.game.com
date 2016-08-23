var Act = function(type, title, block, clickEvent) {
    var self = this;
    
    self.type = type;
    self.title = title;
    self.block = true;

    if (typeof block == 'function' && typeof clickEvent == 'undefined') {
        self.clickEvent = block;
    } else {
        if (typeof block !== 'undefined') {
            self.block = block;
        }

        self.clickEvent = clickEvent;
    }

    self.from = 0;
    self.to = 0;

    self.setFrom = function(position) {
        self.from = position;
    };
    
    self.setTo = function(position) {
        self.to = position;
    };
    
    self.getHtml = function() {
        return '<div class="act wait" type="' + self.type + '">' +
                    self.title +
               '</div>';
    };
};