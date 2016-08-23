var Server = function() {
    var self = this;

    self.url = '/request.php';

    self.load = function(done) {
        self.send({type: 'load'}, done);
    };

    self.send = function(data, done) {
        $.ajax(self.url, {
            data: data,
            method: 'POST'
        }).done(done);
    }
};
