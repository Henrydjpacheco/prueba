const { Router } = require("express");
const controllers = require("../controllers");


const router = Router();
//---------------------------categories
router.get("/",controllers.listCategories);
/* 
router.get("/:id"); */
router.post("/", controllers.createCategory);

//--------------------------------subCategory--------------------------------

router.get("/sub",controllers.list)
router.post("/sub", controllers.createSubcategory);


//---------------------- theme




module.exports = router;
