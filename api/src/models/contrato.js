module.exports = function (sequelize, DataTypes) {
  const Contrato = sequelize.define('Contrato',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      rgan_contractaci: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data_darrer_anunci_plataforma: {
        type: DataTypes.STRING,
        allowNull: false
      },
      expedient: {
        type: DataTypes.STRING,
        allowNull: false
      },
      t_tol: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipus_contracte: {
        type: DataTypes.STRING,
        allowNull: false
      },
      procediment_contractaci: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pressupost_expedient: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pressupost_expedient_sense: {
        type: DataTypes.STRING,
        allowNull: false
      },
      modificacions_import: {
        type: DataTypes.STRING,
        allowNull: false
      },
      modificacions_termini: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pr_rroga_d_un_altre_expedient: {
        type: DataTypes.STRING,
        allowNull: false
      },
      resultat_adjudicaci: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data_acord_adjudicaci: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data_formalitzaci: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cif_adjudicatari: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nom_adjudicatari: {
        type: DataTypes.STRING,
        allowNull: false
      },
      import_adjudicaci: {
        type: DataTypes.STRING,
        allowNull: false
      },
      import_adjudicaci_sense_iva: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ofertes_rebudes: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipus_tramitaci_: {
        type: DataTypes.STRING,
        allowNull: false
      },
      financiaci_ue: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'Contratos',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Contrato.associate = function (models) {

  }

  return Contrato
}
