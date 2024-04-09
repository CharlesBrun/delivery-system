// import login from "../models/Login.js";

class LoginController {

  static login = (req, res) => {
    const userJson = req.body;

    if(userJson && userJson.username === "email" && userJson.password == "1234"){
        res.status(200).send({message: `login efetuado`});
    } else {
        res.status(400).send({message: `login recusado`})
    }
  }

}

export default LoginController