const express = require("express");
const taskController = require("../controllers/taskControllers");

const router = express.Router();

//localhost:3000/api/v1/tasks
router.route("/").get(taskController.getAllTask).post(taskController.createTask);




//localhost:3000/:id
router.route("/:id")
.get(taskController.getOneTask)
//.patch(taskController.updateTask)
//.delete(taskController.delete)


module.exports = router;