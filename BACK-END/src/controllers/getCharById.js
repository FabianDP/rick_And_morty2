const URL = 'https://rickandmortyapi.com/api/character';
const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const {data}=await axios(`${URL}/${id}`)

            if(!data.name)throw new Error(`ID:${id} Not found`)
                const character = {
                    id:data.id,
                    name:data.name,
                    species:data.species,
                    origin:data.origin,
                    image:data.image,
                    gender:data.gender,
                    status:data.status
                }
                return res.status(200).json(character)
            }

//           return res.status(404).send('Not found');       
//tiene que lanzar un throw para que lo coja el catch
        catch (error) {
        return error.message.includes('ID')
         ?res.status(404).send(error.message)
         :res.status(500).send(error.response.data.message)
    }
}

module.exports = {
    getCharById
};





// const URL = 'https://rickandmortyapi.com/api/character';
// const axios = require('axios');


// // const getCharById= async (req,res)=>{
// //     const{id}=req.params;
// //     try {
// //         const response= await axios(`${url}/${id}`);
// //         if(response)
// //         {
// //             const {id,name,gender,species,origin,image,status}= response.data;
// //             const data={id,name,gender,species,origin,image,status};
// //             res.json(data)
// //         }
// //         else res.status(404).json('Not Found')
// //     } catch (error) {
// //         res.status(500).json({message:error.message})
// //     }


// // }

//     const getCharById=(req,res)=>{
//         const { id } = req.params;

//         axios(`${URL}/${id}`)
//     .then(response => response.data)
//     .then(({status, name, species, origin, image, gender}) => {
//         if(name){
//             const character = {
//                 id,
//                 name,
//                 species,
//                 origin,
//                 image,
//                 gender,
//                 status
//             }
//             return res.status(200).json(character)
//         }
//     return res.status(404).send('Not Found');
//     })
//     .catch(error => res.status(500).send(error.message))
//     }
// module.exports = {
//     getCharById
// };


// const getCharById =(res,id)=>
// {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     //value
//     //sucecessHandler se queda con el obj de la api
//     .then((response)=>response.data)//sucecessHandler
//     .then(({name,gender,species,origin,image,status})=>{
//     const char={
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//     }
//     return res.writeHead(200,{"Content-type":"application/json"})
//     .end(JSON.stringify(char))
//     //devo parcear cuando envio informacion cuando recibo no 
//     })
//     .catch((error)=>{
//         return res.writeHead(500,{"Content-type":"text/plain"})
//     .end(error.message)})
   
// }