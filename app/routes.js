module.exports = function(app) {
    // server routes ===========================================================

    // sample routes -----------------------------------------------------------
    // this route will return all the 'nerds' in our db
    app.get('/api/nerd', function(req, res) {
      Nerd.find(function(err, nerds) {
        if (err)
          res.send(err);

        res.json(nerds); //this is telling the route to reutn all the nerds in JSON formate
      });
    });
    // more routes could be placed here

    // frontend routes =========================================================
    // these routes to handle all angular requests
    app.get('*', function(req, res) {
      res.sendfile('./public/index.html'); // load our public/index.html file
    });

  }
