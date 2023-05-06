const{User}= require('../DB_connection')

const postUser = async (req, res) =>
{
    try {
        const{password,email}=req.body;

        if(!password||!email)  return res.status(400).json({error:"Faltan dato"})

        const userFinded = await User.findOne({ where: { email } });
        if(userFinded)return res.status(400).json({error:'usuario ya esta en la BD'});
        const newUser= await User.create({email,password})
        return res.status(200).json({email:newUser.dataValues.email,id:newUser.dataValues.id})

    } catch (error) {
        console.log(error);
      return res.status(500).send("FFFFF")
    }

}

module.exports=postUser;