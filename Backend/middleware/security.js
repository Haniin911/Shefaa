import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";

const securityMiddleware = (app) => {
  app.use(helmet());
  app.use(hpp());
  app.use(
    cors({
      origin:
        process.env.NODE_ENV === "production"
          ? "https://yourdomain.com"
          : "*",
    })
  );
};

export default securityMiddleware;
