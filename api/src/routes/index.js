const { Router } = require("express");
const controllers = require("../controllers");


const router = Router();
//---------------------------categories
router.get("/categories",controllers.listCategories);
router.get("/categories:id", controllers.getCategory); 
router.post("/categories", controllers.createCategory);
router.put("/categories", controllers.UpdateCategory)

//--------------------------------subCategory--------------------------------

router.get("/subcategory",controllers.listSubCategory)
router.post("/subcategory", controllers.createSubcategory);


//---------------------- theme




module.exports = router;
