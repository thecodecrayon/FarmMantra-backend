import { DataTypes } from "sequelize";

export const createViewModel = (sequelize) => {
  const View = sequelize.define(
    "View",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      ipAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
      },
    },
    {
      tableName: "views",
      timestamps: true,
    },
  );

  return View;
};
