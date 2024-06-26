import express from "express";
import login from "./login.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: "API NodeJs"})
    })

    app.use(
        express.json(),
        login,
    )
}

export default routes;