const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         //version pro
         // type:DataTypes.UUID,//fdissidfi-sdfsdf12-asd
         // toDefaultValue:DataTypes.UUIDV4,
         // primaryKey:true,
         // allwNull:false,
         type:DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         allowNull: false,
         primaryKey: true,
         unique: true,
      },

      email:{
         type:DataTypes.STRING,
         allwNull:false,
          
      },
      password:{
         type:DataTypes.STRING(64),
         allwNull:false,
         // validate:{
         //    is:[" [a-z+$",'i']
         // }
      }

   }, { timestamps: false });
};
