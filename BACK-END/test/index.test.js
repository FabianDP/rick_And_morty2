const app = require('../src/app');
const session = require('supertest');
const request = session(app);
const user = require('../src/utils/users')
const character = {
    id:13424,
    name:'ttry',
    species:'human',
    gender:'female',
    status:'alive',
    origin:{
        name:'earth'
    },
    image:'image.jpg'
}

describe('test de rutas', () => {

    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const res = await request.get('/rickandmorty/character/1')
            expect(res.statusCode).toBe(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const res = await request.get('/rickandmorty/character/1')
            //duda
            for (const prop in res.body) {
                expect(res.body).toHaveProperty(prop)
            }

        })
        it('Si hay un error responde con status: 500', async () => {
            const res = await request.get('/rickandmorty/character/00000f')
            expect(res.statusCode).toBe(500)
        })
    })

    describe('GET /rickandmorty/login', () => {
        let access = { access: true }
        it('test de credenciales', async () => {
            const res = await request.get('/rickandmorty/login?email=inge.fabian@gmail.com&password=1234567')
            expect(res.body).toEqual(access);

        });
        it('test de credenciales negadas', async () => {
            const res = await request.get('/rickandmorty/login?email=inge.fabian@gmail.com&password=12347')
            access.access = false
            expect(res.body).toEqual(access);

        })
    })
    describe('POST /rickandmorty/fav', () => {
        it('debe tener con el valor de fab', async () => {
            const res = await request.post('/rickandmorty/fav').send( character);
            expect(res.body).toContainEqual( character)
        })

        it('debe tener sin eliminar los demas datos ', async () => {
            character.id=12312;
            character.name='fyy22a';
            const res = await request.post('/rickandmorty/fav').
            send( character);
            expect(res.body.length).toBe(2)
        })
    })
    describe('DELETE /rickandmorty/fav/:id', () => {
        it('id no existe retorna el arreglo de fav', async () => {
            const res = await request.delete('/rickandmorty/fav/2')
            expect(res.body.length).toBe(2)
        })


        it('borrar elemento', async () => {
            const res = await request.delete('/rickandmorty/fav/12312')
            expect(res.body.length).toBe(1)
        })
    })
})