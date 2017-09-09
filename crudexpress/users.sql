CREATE TABLE IF NOT EXISTS 'users'(
  'id' int(11) NOT NULL AUTO_INCREMENT,
  'username' varchar(200) NOT NULL,
  'password' varchar(200) NOT NULL,
  'name' varchar(200) NOT NULL,
  'address' text NOT NULL,
  'email' varchar(200) NOT NULL,
  'phone' varchar(20) NOT NULL,
  PRIMARY KEY ('id')
)ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11;

INSERT INTO users(id, username, password, name, address, email, phone) VALUES(
  1, "truongtd", "123456", "Truong", "truongtd@gmail.com", "0966706409"
),
(2, "hungvv", "123456", "Vu van Hung", "hungvv@vp9.vn", "0123456789");
