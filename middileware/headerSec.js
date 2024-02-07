module.exports = headerSec = (req, res, next) => {
  if (req.headers.authorization != "heyUser") {
    // console.log(req.headers.authorization);
    res.status(400).send("you are not valid user");
  } else {
    next();
  }
};
