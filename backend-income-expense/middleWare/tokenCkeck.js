import jwt from "jsonwebtoken";

export const tokenCheck = async (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];

  const tokenCheck = jwt.verify(
    accessToken,
    process.env.JWT_SECRET || "defaultSecret"
  );

  if (tokenCheck) {
    res.send(true);
    return;
  }

  result.status(500).send("hahaha");
};
