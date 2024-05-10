const axios = require("axios");
const API_URL =
  "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-btthb/endpoint/returnAllInstitutions";

exports.getAllInstitutions = async (req, res) => {
  console.log("Request headers:", req.headers);
  console.log("Request body:", req.body);

  try {
    const response = await axios.post(API_URL, req.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.headers.authorization.replace("Bearer ", "")}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch institutions:", error.message);
    res.status(500).json({ message: error.message });
  }
};
