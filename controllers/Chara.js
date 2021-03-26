// const models = require('../models');
const { Chara, Skill } = require('../models');

class CharaController {
  async getCharacter(req, res, next) {
    try {
      res.status(200).json({ message: 'success' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'failed' });
    }
  }
}

module.exports = CharaController;
