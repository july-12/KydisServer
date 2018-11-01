'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: { type: DataTypes.STRING, allowNull: false },
    content: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    models.Post.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
    models.Post.hasMany(models.Comment, { foreignKey: 'post_id', as: 'comments' })
    // associations can be defined here
  };
  return Post;
};
