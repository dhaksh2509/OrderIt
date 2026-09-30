const express = require("express");
const menuRoutes=require("./foodItem");
const router = express.Router({ mergeParams: true });

const {
  getAllRestaurants,
  createRestaurant,
  getRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");

const { protect } = require("../controllers/authController");
const { authorizeRoles } = require("../middlewares/authorizeRoles");


router
  .route("/")
  .get(getAllRestaurants)
  .post(protect, authorizeRoles("admin"), createRestaurant);

router
  .route("/:storeId")
  .get(getRestaurant)
  .delete(protect, authorizeRoles("admin"), deleteRestaurant);

router.use("/:storeId/menus", menuRoutes);

module.exports = router;
