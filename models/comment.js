'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    post_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    models.Comment.belongsTo(models.Post, { foreignKey: 'post_id' })
    // associations can be defined here
  };
  return Comment;
};
