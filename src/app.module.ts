import { App } from "@mayajs/core";
import { Mongo } from "@mayajs/mongo";
import { routes } from "./app.routing.module";

@App({
  cors: true,
  logs: "dev",
  port: 3333,
  database: Mongo({
    connectionString: "mongodb+srv://root:root@sample.u1uyv.mongodb.net/test?retryWrites=true&w=majority",
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
  }),
  routes,
})
export class AppModule {}
