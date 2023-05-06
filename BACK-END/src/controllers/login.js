const{User}= require('../DB_connection')

const login = async (req, res) =>
{
    try {
        const{password,email}=req.query;

        if(!email||!password)  return res.status(403).json({error:"Faltan dato"})

        const userFinded = await User.findOne({ where: { email } });
        if(!userFinded)return res.status(404).json({error:'usuario o contraseña no valido'});
        if(userFinded.dataValues.password !==password) return res.status(402).json({error:'usuario o contraseña no valido'});

        return res.status(200).json({
            access: true
         })


    } catch (error) {
        console.log(error);
      return res.status(500).send("FFFFF")
    }

}

module.exports=login;