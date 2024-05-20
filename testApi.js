const axios = require("axios");

axios
  .post(
    "http://localhost:3000/api/user/profile",
    {
      deviceIdentifier: "01E3A05A-D7BE-5887-8BB6-9A99686EBE67",
    },
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjYxZmJhMDU4YTE2ZjBjODAwNjViZjZlIiwiZXhwIjoxNzE1MzMyODYzLCJpYXQiOjE3MTUzMzEwNjMsImlzcyI6IjY2M2RkZmY3MDZhNTgwMWQ2MWVjNGU3OCIsImp0aSI6IjY2M2RkZmY3MDZhNTgwMWQ2MWVjNGU3YSIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY2MWZiYTA1OGExNmYwYzgwMDY1YmY2ZSIsInN1YiI6IjY2M2RkZmY3MDZhNTgwMWQ2MWVjNGU3NiIsInR5cCI6ImFjY2VzcyJ9.bzzcmPcU20dUGmsM0nRSQUlY6vd_y7OzQPn0qlCc-kk",
      },
    },
  )
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response);
  });
