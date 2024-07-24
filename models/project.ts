"use strict";
import { Model } from "sequelize";

interface PROJECT {
  id: number;
  title: string;
  desc: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Project extends Model<PROJECT> implements PROJECT {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    title!: string;
    desc!: string;
    static associate(models: any) {
      // define association here
      Project.belongsToMany(models.User, {
        through: "UserProject",
      });
    }
  }
  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      desc: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
