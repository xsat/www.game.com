var Hero = function(selector) {
    var self = this;

    self.damage = 10;
    self.health = 100;
    self.armor = 0;
    self.moves = 5;
    self.position = new Position(0, 0);
    self.class = selector;
    self.selector = self.class;
    self.getHtml = function() {
        return '<div class="' + self.class + '"></div>';
    };

    self.moveTo = function(position) {
        console.log(position);

        $('.content > .row[position="' + position.row + '"] > .cell[position="' + position.cell + '"]')
            .attr('class', 'cell ' + self.class)
            .html(self.getHtml());
    };
};