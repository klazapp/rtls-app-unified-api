const axios = require("axios");

exports.getTextPath = async (req, res) => {
  try {
    const { startApi, endApi } = req.query;

    console.log("start = " + startApi);
    console.log("end = " + endApi);

    const response = await axios.get(
      `http://23.100.90.92/semb-start-text-WGS84?start=${startApi}&end=${endApi}`,
      {
        headers: {
          "x-api-key": "PXvxe578aHtGjOb6lwvytt2MOI-XrLXooPzLYQOezbk",
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCoordPath = async (req, res) => {
  try {
    let { x, y, level, endApi } = req.query;

    // Normalize level based on specified rules
    if (
      (level.length === 2 &&
        (level.startsWith("L") || level.startsWith("G"))) ||
      level.startsWith("Floor")
    ) {
      level = level.replace(/^[LGFloor]+/, ""); // Remove the initial 'L', 'G', or 'Floor' from level
    }

    console.log("x = " + x);
    console.log("x = " + y);
    console.log("level = " + level);
    console.log("endApi = " + endApi);
    console.log(
      "full url = " +
        `http://23.100.90.92/semb-start-coord-WGS84?start=${x},${y},${level}&end=${endApi}`,
    );

    const response = await axios.get(
      `http://23.100.90.92/semb-start-coord-WGS84?start=${x},${y},${level}&end=${endApi}`,
      {
        headers: {
          "x-api-key": "PXvxe578aHtGjOb6lwvytt2MOI-XrLXooPzLYQOezbk",
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
