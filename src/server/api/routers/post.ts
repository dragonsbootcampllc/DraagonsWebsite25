import { z } from "zod";
import { Analytics } from '@customerio/cdp-analytics-node'

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import axios, { all } from "axios";


export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    // .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      return JSON.stringify(result.data);
      // return ctx.db.post.create({
      //   data: {
      //     name: input.name,
      //     createdBy: { connect: { id: ctx.session.user.id } },
      //   },
      // });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  getSecretMessage: publicProcedure
  .input(z.object({ name: z.string().min(1) }))
  .query( async ({ input }) => {
    // const result = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      return JSON.stringify({ hello: `Hello ${input.name}` });
  }),
  addNewPerson: publicProcedure
  .input(z.object({ email: z.string().min(1) }))
  .query( async ({ input }) => {
    // const result = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      console.log(input.email);
      addNewPerson(input.email);
      return;
  }),

});


function addNewPerson(email: string) {
  const analytics = new Analytics({
    writeKey: CUSTOMER_SIDE_ID,
  });

  analytics.identify({
    userId:email,
    traits: {
      from: "cal",
      email,
    },
    integrations: {
      All: true
    },
  }, function(err: any, res: any) {
    if (err) {
      console.log("err",err);
    } else {
      console.log("res",res);
    }
  });
}