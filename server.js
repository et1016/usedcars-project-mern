const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes").auth;
const carRoute = require("./routes").car;
const cors = require("cors");

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Atlas 連結成功 ...");
  })
  .catch((err) => {
    console.log(err);
    console.log("MongoDB Atlas 連結失敗 ...");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", authRoute);
app.use("/api/car", carRoute);

const port = process.env.PORT || 8080;
// 在 Cyclic 當中它會自動設定 process.env.PORT，而且它是浮動的。
// || = 如果沒有 process.env.PORT 就執行 8080。

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
