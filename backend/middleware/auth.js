const jwt = require("jsonwebtoken");

// Middleware takes in 3 params
// Has access to request and response cycle
// Next is a callback that happens after the response to move to next middleware
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");
  // Check if no token
  if (!token) {
    // Status 401 = not authorized
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify Token
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded.user; // Allows to use decoded user for other routes
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
