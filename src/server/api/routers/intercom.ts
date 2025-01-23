import { createTRPCRouter, protectedProcedure } from "../trpc";
import crypto from "crypto";
import { z } from "zod";

export const intercomRouter = createTRPCRouter({
  getHash: protectedProcedure
    .input(z.object({ email: z.string().email() }))
    .query(({ input }) => {
      const secretKey = process.env.INTERCOM_SECRET_KEY;
      
      if (!secretKey) {
        throw new Error("Intercom secret key not configured");
      }

      const hash = crypto
        .createHmac("sha256", secretKey)
        .update(input.email)
        .digest("hex");

      return { hash };
    }),
});