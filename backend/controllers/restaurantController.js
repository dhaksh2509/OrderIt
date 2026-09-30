const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middlewares/catchAsyncErrors")
const APIFeatures=require("../utils/apiFeatures")
const  Restaurant=require("../models/restaurant")
//get all restaurant
exports.getAllRestaurants=catchAsyncErrors(async(req,res,next)=>{
    const apifeatures=new APIFeatures(Restaurant.find(),req.query).search().sort()
    const restaurant=await apifeatures.query
    res.status(200).json({
        status:"Success",
        count:restaurant.length,
        restaurant:restaurant
    })
})
// get restaurant by its id
exports.getRestaurant=catchAsyncErrors(async(req,res,next)=>{
    const restaurant=await Restaurant.findById(req.params.storeId);
    if(!restaurant){
        return next(new ErrorHandler("No Restaurant found with the ID"))
    }
    res.status(200).json({
        status:"Success",
        data:restaurant 
    })

})

//update

exports.createRestaurant = catchAsyncErrors(async (req, res, next) => {
  const restaurant = await Restaurant.create(req.body);
  res.status(201).json({
    status: "success",
    data: restaurant,
  });
});

exports.deleteRestaurant = catchAsyncErrors(async (req, res, next) => {
  const restaurant = await Restaurant.findByIdAndDelete(req.params.storeId);

  if (!restaurant)
    return next(new ErrorHandler("No document found with that ID", 404));

  res.status(204).json({
    status: "success",
  });
});

