module.exports = (sequelize, DataTypes) => {
  const Resources = sequelize.define('resources',
    {
      title: {
        type: DataTypes.TEXT
      },
      resourceFor: {
        type: DataTypes.TEXT
      },
      publisher: {
        type: DataTypes.STRING
      },
      linkToLicense: {
        type: DataTypes.STRING
      },
      uploadDate: {
        type: DataTypes.DATE
      },
      addedBy: {
        type: DataTypes.STRING
      },
      openWith: {
        type: DataTypes.STRING
      },
      subject: {
        type: DataTypes.TEXT
      },
      articleDate: {
        type: DataTypes.DATE
      },
      kind: {
        type: DataTypes.STRING
      },
      language: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      },
      sum: {
        type: DataTypes.DOUBLE
      },
      level: {
        type: DataTypes.TEXT
      },
      languages: {
        type: DataTypes.TEXT
      },
      timesRated: {
        type: DataTypes.STRING
      },
      tag: {
        type: DataTypes.TEXT
      },
      year: {
        type: DataTypes.DATE
      },
      averageRating: {
        type: DataTypes.DOUBLE
      },
      filename: {
        type: DataTypes.STRING
      },
      mediaType: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      tags: {
        type: DataTypes.STRING
      },
      medium: {
        type: DataTypes.STRING
      },
      isDownloadable: {
        type: DataTypes.BOOLEAN
      },
      resourceType: {
        type: DataTypes.STRING
      },
      openUrl: {
        type: DataTypes.STRING
      },
      attachments: {
        type: DataTypes.TEXT
      }
    },
    { timestamps: false }
  )
  return Resources
}
