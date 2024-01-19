const bcrypt = require("bcryptjs");
function hashPassword(password) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

console.log(hashPassword("123"));
