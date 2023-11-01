import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod";

const app = fastify();

const prisma = new PrismaClient();

app.get("/headphones", async (): Promise<void> => {
  const headphones = await prisma.headphones.findMany();
});

app.post("/headphones", async (request, reply) => {
  const createHeadphonesSchema = z.object({
    brand: z.string(),
    model: z.string(),
    reference: z.string(),
    color: z.string(),
    price: z.number(),
    installment_price: z.number(),
    installments: z.number(),
    img_url: z.string(),
  });

  const {
    brand,
    model,
    reference,
    color,
    price,
    installment_price,
    installments,
    img_url,
  } = createHeadphonesSchema.parse(request.body);

  await prisma.headphones.create({
    data: {
      brand,
      model,
      reference,
      color,
      price,
      installment_price,
      installments,
      img_url,
    },
  });

  return reply.status(201).send();
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
