import JWT from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res
        .status(403)
        .json({ error: "Unauthorized - No Token Provided" });

    const decodedToken = JWT.verify(token, process.env.JWT_SECRET);

    if (!decodedToken)
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });

    const user = await User.findById(decodedToken.userId).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    req.user = user;
    next();

  } catch (error) {
    console.log("Error in Protect Route Middleware: " + error);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

export default protectRoute;
