import  "dotenv/config.js";
import { logger } from "./application/logging.js";
import { web } from "./application/web.js";

web.listen(process.env.PORT,()=>{
    logger.info("App start")
})