import { PrismaClient } from "../../prisma/generated/client";

const prismaClient = new PrismaClient({
    log: ["error", "warn", "info", "query"]
});
export default prismaClient;