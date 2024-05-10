const axios = require("axios");

const USER_AUTH_API =
  "https://ap-southeast-1.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-btthb/auth/providers/anon-user/login";
const BASE_USER_DATA_API =
  "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-btthb/endpoint";

exports.authenticateUser = async (req, res) => {
  try {
    const response = await axios.post(USER_AUTH_API, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAndReturnUserData = async (req, res) => {
  const url = `${BASE_USER_DATA_API}/findAndReturn`;
  try {
    const response = await axios.post(url, req.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.headers.authorization.replace("Bearer ", "")}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAndReturnUserData = async (req, res) => {
  const url = `${BASE_USER_DATA_API}/updateAndReturn`;
  try {
    const response = await axios.post(url, req.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.headers.authorization.replace("Bearer ", "")}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
