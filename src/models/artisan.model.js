import { DataTypes } from "sequelize";

export const createArtisanModel = (sequelize) => {
  const Artisan = sequelize.define(
    "Artisan",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tagline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberOfArtisans: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      yearsActive: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productsSold: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      impactPoints: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        defaultValue: [],
      },
      badges: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        defaultValue: [],
      },
      isDeleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      timestamps: true,
      tableName: "artisans",
    },
  );

  return Artisan;
};
