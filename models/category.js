'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    models.Category.hasMany(models.Post, { foreignKey: 'category_id'})
    // associations can be defined here
  };
  return Category;
};
