'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chara.belongsTo(sequelize.models.Skill);
    }
  };
  Chara.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chara',
  });
  return Chara;
};