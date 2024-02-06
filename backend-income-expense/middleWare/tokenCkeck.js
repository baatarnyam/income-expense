import jwt from "jsonwebtoken";

export const tokenCheck = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  const tokenCheck = jwt.verify(
    accessToken,
    process.env.JWT_SECRET || "defaultSecret",
    (err, result) => {
      if (err) {
        console.log(err);
        result.status(500).send("hahaha");
      } else {
        console.log(result);
        next();
      }
      return result;
    }
  );
};
