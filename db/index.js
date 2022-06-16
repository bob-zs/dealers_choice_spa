const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4 } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_express_spa');

const Video = conn.define('video', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  path: {
    type: STRING,
    allowNull: false
  }
})

const User = conn.define('user', {
  name: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  }
});

module.exports = {
  Video,
  User
}
