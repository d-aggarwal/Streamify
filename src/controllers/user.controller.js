import {asyncHandler} from "../utils/asyncHandler.js";


const registerUer = asyncHandler(async(req,res) => {
  res.status(201).json({
        message: "done really"
    }
    )
})

export  {registerUer};