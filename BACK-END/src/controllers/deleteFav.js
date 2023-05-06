const{Favorite}= require('../DB_connection');


const deleteFav = async (req, res) =>
{
    try {
        const{id}=req.params;

        if(!id) return res.status(400).json({error:"no se encontre id"})
        const char = await Favorite.findByPk(id);
        if (char) {
          await Favorite.destroy({
            where: {
              id,
            },
          });
        }
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        console.log(error);
      return res.status(500).send("FFFFF")
    }

}

module.exports=deleteFav;