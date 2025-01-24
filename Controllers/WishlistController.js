// // controllers/wishlistController.js
// const Wishlist = require("../Models/WishlistModel");
// const productdata = require("../Models/ProductModel");

// // Add a product to the wishlist
// exports.addToWishlist = async (req, res) => {
//   const { userId, productId } = req.body;

//   try {
//     // Check if the product already exists in the user's wishlist
//     const wishlist = await Wishlist.findOne({ userId });

//     if (wishlist) {
//       // If product already exists, add it only if not already added
//       const productExists = wishlist.products.some(
//         (item) => item.productId.toString() === productId
//       );
//       if (productExists) {
//         return res
//           .status(400)
//           .json({ message: "Product already in wishlist." });
//       }

//       // Add product to the wishlist
//       wishlist.products.push({ productId });
//       await wishlist.save();
//       return res
//         .status(200)
//         .json({ message: "Product added to wishlist.", wishlist });
//     } else {
//       // Create new wishlist and add the product
//       const newWishlist = new Wishlist({
//         userId,
//         products: [{ productId }],
//       });

//       await newWishlist.save();
//       return res
//         .status(201)
//         .json({ message: "Product added to wishlist.", wishlist: newWishlist });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error." });
//   }
// };

// // Get wishlist for a user
// exports.getWishlist = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const wishlist = await Wishlist.findOne({ userId }).populate(
//       "products.productId"
//     );

//     if (!wishlist) {
//       return res.status(404).json({ message: "Wishlist not found." });
//     }

//     res.status(200).json({ wishlist });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error." });
//   }
// };

// // Remove a product from the wishlist
// exports.removeFromWishlist = async (req, res) => {
//   const { userId, productId } = req.body;

//   try {
//     const wishlist = await Wishlist.findOne({ userId });

//     if (!wishlist) {
//       return res.status(404).json({ message: "Wishlist not found." });
//     }

//     // Remove the product from the wishlist
//     wishlist.products = wishlist.products.filter(
//       (item) => item.productId.toString() !== productId
//     );
//     await wishlist.save();

//     res
//       .status(200)
//       .json({ message: "Product removed from wishlist.", wishlist });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error." });
//   }
// };
