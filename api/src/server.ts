import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	jsonSchemaTransform,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";

import { fastifySwagger } from "@fastify/swagger";
import { fastifyCors } from "@fastify/cors";

import ScalarApiReference from "@scalar/fastify-api-reference";
import { listWebhooks } from "@/routes/list-webhooks";

import { env } from "./env";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
	origin: true,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
	// credentials: true,
});

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: "Webhook Inspector API",
			description: "API for capturing and inspect webhook requests",
			version: "1.0.0",
		},
	},
	transform: jsonSchemaTransform,
});

app.register(ScalarApiReference, {
	routePrefix: "/docs/",
});

app.register(listWebhooks);

app.listen({ port: env.PORT, host: "0.0.0.0" }).then(() => {
	console.log("Server is running on localhost:3333");
	console.log("Docs are running on localhost:3333/docs");
});
