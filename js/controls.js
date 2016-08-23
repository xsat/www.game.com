var Controls = function(acts) {
    var self = this;
    
    self.acts = acts || {};
    self.selector = '.controls';
    self.classes = {
        active: 'active',
        disable: 'disable',
        wait: 'wait'
    };
    self.selectors = {
        act: self.selector + ' > .act'
    };
    
    self.addAct = function(act) {
        self.acts[act.type] = act;
    };
    
    self.init = function() {
        var controls = $(self.selector);
        
        controls.html('');
        
        $.each(self.acts, function() {
            controls.append(this.getHtml());
        });
        self.events();
    };
    
    self.events = function() {
        $(document).on('click.controls', self.selectors.act + '.' + self.classes.wait, function() {
            var item = $(this), 
                status = item.hasClass(self.classes.active),
                act = self.acts[item.attr('type')];

            if (act.block) {
                if (status) {
                    item.removeClass(self.classes.active);
                    $(self.selectors.act + '.' + self.classes.disable)
                        .removeClass(self.classes.disable)
                        .addClass(self.classes.wait);
                } else {
                    item.addClass(self.classes.active);
                    $(self.selectors.act)
                        .not('.' + self.classes.active)
                        .addClass(self.classes.disable)
                        .removeClass(self.classes.wait);
                }
            }

            act.clickEvent(!status);
        });
    };
};