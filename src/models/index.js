import { sequelize } from "../db/connectDB.js";
import { createArtisanModel } from "./artisan.model.js";
import { createCategoryModel } from "./category.model.js";
import { createInquiryModel } from "./inquiry.model.js";
import { createProductModel } from "./product.model.js";
import { createUserModel } from "./user.model.js";
import { createViewModel } from "./views.model.js";

const User = createUserModel(sequelize);
const Category = createCategoryModel(sequelize);
const Artisan = createArtisanModel(sequelize);
const Product = createProductModel(sequelize);
const View = createViewModel(sequelize);
const Inquiry = createInquiryModel(sequelize);

// RELATONSHIPS;
// CATEGORY =><= PRODUCT;
Category.hasMany(Product, {
  foreignKey: "categoryId",
});
Product.belongsTo(Category, {
  foreignKey: "categoryId",
});

// ARTISAN =><= PRODUCT;
Artisan.hasMany(Product, {
  foreignKey: "artisanId",
});
Product.belongsTo(Artisan, {
  foreignKey: "artisanId",
});

// VIEW =><= PRODUCT;
Product.hasMany(View, {
  foreignKey: "productId",
});
View.belongsTo(Product, {
  foreignKey: "productId",
});

//  INQUIRY =><= USER;
Product.hasMany(Inquiry, {
  foreignKey: "productId",
});
Inquiry.belongsTo(Product, {
  foreignKey: "productId",
});

// SYNC MODELS
export const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Models synced successfully");
  } catch (err) {
    console.error("Model sync failed:", err);
  }
};

export { User, Category, Artisan, Product, View, Inquiry };
