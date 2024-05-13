import fastify from "fastify";

const app = fastify()

app.get('/', (req, reply)=>{
  return reply.status(200).send({message: 'Hello World!'})
})

app.listen({
  port: 3333 || process.env.PORT,
})