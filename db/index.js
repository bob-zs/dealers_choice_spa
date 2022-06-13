const Sequalize = require('sequelize');
const { STRING, TEXT } = Sequalize;
const conn = new Sequalize(process.env.DATABASE_URL || 'postgres://localhost/acme_express_spa');

const Video = conn.define('video', {
  name: {
    type: STRING,
    allowNull: false,
  },
  path: {
    type: STRING,
    allowNull: false
  }
  // description
})

/**
 * Possible Models:
 * - User
 *  - username
 * 
 * - if time permits
 * - comments
 * - saved videos
 * - passwordHashed
 * - Upvotes - User/Video many-to-many relationship
 */

module.exports = {
  Video
}
