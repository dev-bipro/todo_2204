const mongoose = require("mongoose");
// 96Nw1aoOsnsoQPcb

mongoose
  .connect(
    "mongodb+srv://todo2204:96Nw1aoOsnsoQPcb@cluster0.9lzvod9.mongodb.net/todo?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
  });
// try {
//     await mongoose.connect("mongodb+srv://todo2204:96Nw1aoOsnsoQPcb@cluster0.9lzvod9.mongodb.net/todo?retryWrites=true&w=majority");
//   } catch (error) {
//     handleError(error);
//   }
