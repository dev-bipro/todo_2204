module.exports = inputCheck = (inp1 = "", inp2 = "") => {
  console.log(inp1, inp2);
  const errors = {};
  if (!inp1) {
    errors.name = "please type your name";
  }
  if (!inp2) {
    errors.catagory = "please type your catagory";
  }
  return errors;
};
