const axios = require("axios");

const main = async () => {
  let data = await getData();
  let postedData = await postData();
  console.log(postedData);
};

const getData = async () => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
  } catch (err) {
    console.error("Response Error");
    return undefined;
  }
};

const postData = async () => {
  let body = {
    title: "Yeet",
    body: "Yeetus McCleetus"
  };

  try {
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      body
    );
    return res.data;
  } catch (err) {
    console.error("Response Error");
    return undefined;
  }
};

main();
