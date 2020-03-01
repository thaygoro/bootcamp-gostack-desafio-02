import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: {
          street: Sequelize.STRING,
          number: Sequelize.NUMBER,
          complement: Sequelize.STRING,
          state: Sequelize.STRING,
          city: Sequelize.STRING,
          CEP: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Recipient;

/*
  Destinatário:
  - nome;
  - Endereço:
    - rua,
    - número,
    - complemento,
    - estado,
    - cidade,
    - CEP
*/
