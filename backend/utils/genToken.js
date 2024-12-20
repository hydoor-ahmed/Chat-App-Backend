import JWT from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = JWT.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // ? Prevent XSS Attacks cross-site Scripting attacks
    sameSite: "strict", // ? CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", // ? Only send cookie over HTTPS
  });
};

export default generateTokenAndSetCookie;
