

exports.list = function (req, res) {

  req.getConnection(function(err, connection){


    connection.query('Select * From users', function(err, rows){
      if(err)
        console.log('Error selection');
        res.render('users', {page_title: "Users node js ", data : rows});
    });
  });
};
exports.add = function(req, res){
  res.render('add_users', {page_title: 'Add user node js'});
};

exports.edit = function(req, res){

  var id  = req.params.id;
  req.getConnection(function(err, connection){
    connection.query('Select * from users where id = ?', [id], function(err, rows){
      if(err)
        console.log('Error selcting; %s', err);
        res.render('edit_users', {page_title: "Edit users node js", data: rows});

    });
  });
};
exports.save = function(req, res){
  var input = JSON.parse(JSON.stringify(req.body));
  req.getConnection(function(err, connection){
    var data = {
      username : input.username,
      password : input.password,
      name     : input.name,
      email    : input.email,
      address  : input.address,
      phone    : input.phone
    };
    var validatorEmail = require('validator');
    var username = req.body.username;
    var phone = req.body.phone;
    var sqlQuery = "SELECT * FROM users where username = ?"
    connection.query(sqlQuery,[username], function(err, result){
      if (err){
        console.log("Error query", err);
        return false;
      }else{
        console.log("length" + result.length);
        if(result && result.length > 0){
          // console.log("Error", err);
          // res.render('Username exsited!')
          // return res.redirect('/users');
          res.end('"name" must be a string with length between 0 and 50');
          // res.redirect('/users/add');
          return false;
        }
        if(!validatorEmail.isEmail(input.email)){
          // console.log("Format email error");
          res.status(500).send('Format email error')
          return false;
        }else{

          connection.query("Insert into users set ?", data, function(err, rows){
              console.log('insert here');
              res.redirect('/users');
          });
        }
      }
    });
  });
};

exports.save_edit = function(req, res){
  var input = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;
  req.getConnection(function(err, connection){
    var data = {
      username : input.username,
      password : input.password,
      name     : input.name,
      email    : input.email,
      address  : input.address,
      phone    : input.phone
    };
    var validatorEmail = require('validator');
    var username = req.body.username;
    var phone = req.body.phone;
    var sqlQuery = "SELECT * FROM users where username = ?"
    console.log(username);
    connection.query(sqlQuery,[username], function(err, result){
      if (err){
        console.log("Error query", err);
        return false;
      }else{
        console.log("length" + result.length);
        if(result && result.length > 0){
          res.status(500).send('Username exsited!')
          return false;
        }
        if(!validatorEmail.isEmail(input.email)){
          res.status(500).send('Format email error')
          return false;
        }
        if(isNaN(phone)){
            res.status(500).send('Format phone error')
            return false;
        }else{
          connection.query("UPDATE users set ? WHERE id = ?", [data,id], function(err, rows){
            if(err)
              res.status(500).send("Error updating: %s", err);

              res.redirect('/users');
          });
        }
      }
    });

  });

};

exports.delete_user = function(req, res){
  var id = req.params.id;
  req.getConnection(function(err, connection){
    connection.query("DELETE FROM users WHERE id = ? ", [id], function(err, result){
      if(err)
          console.log("Error deleting : %s ",err );
          res.redirect('/users');
    });
  });
};
