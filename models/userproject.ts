"use strict";
import { Model } from "sequelize";

interface USERPROJECT {
  userProjectId: number;
  projectId: number;
  userId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class UserProject extends Model<USERPROJECT> implements USERPROJECT {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    userProjectId!: number;
    projectId!: number;
    userId!: number;
    static associate(models: any) {
      // define association here
    }
  }
  UserProject.init(
    {
      userProjectId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Projects",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserProject",
    }
  );
  return UserProject;
};
