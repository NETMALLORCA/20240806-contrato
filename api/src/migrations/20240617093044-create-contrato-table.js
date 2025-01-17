'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contrato', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      rgan_contractaci: {
        type: Sequelize.STRING
      },
      data_darrer_anunci_plataforma: {
        type: Sequelize.STRING
      },
      expedient: {
        type: Sequelize.STRING
      },
      t_tol: {
        type: Sequelize.TEXT
      },
      tipus_contracte: {
        type: Sequelize.STRING
      },
      procediment_contractaci: {
        type: Sequelize.STRING
      },
      pressupost_expedient: {
        type: Sequelize.STRING
      },
      pressupost_expedient_sense: {
        type: Sequelize.STRING
      },
      modificacions_import: {
        type: Sequelize.STRING
      },
      modificacions_termini: {
        type: Sequelize.STRING
      },
      pr_rroga_d_un_altre_expedient: {
        type: Sequelize.STRING
      },
      resultat_adjudicaci: {
        type: Sequelize.STRING
      },
      data_acord_adjudicaci: {
        type: Sequelize.STRING
      },
      data_formalitzaci: {
        type: Sequelize.STRING
      },
      cif_adjudicatari: {
        type: Sequelize.STRING
      },
      nom_adjudicatari: {
        type: Sequelize.STRING
      },
      import_adjudicaci: {
        type: Sequelize.STRING
      },
      import_adjudicaci_sense_iva: {
        type: Sequelize.STRING
      },
      ofertes_rebudes: {
        type: Sequelize.STRING
      },
      tipus_tramitaci_: {
        type: Sequelize.STRING
      },
      financiaci_ue: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contrato')
  }
}
