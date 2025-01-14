import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const faqRouter = createTRPCRouter({
  getMany: publicProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).default(20),
        category: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { page, limit, category } = input;
      const skip = (page - 1) * limit;

      const faqs = await ctx.db.fAQ.findMany({
        where: category
          ? {
              category: {
                name: category,
              },
            }
          : undefined,
        include: {
          category: true,
        },
        skip,
        take: limit,
      });

      const count = await ctx.db.fAQ.count();

      const formatted = faqs.map((faq) => {
        return {
          id: faq.id,
          category: faq.category?.name,
          question: faq.question,
          answer: faq.answer,
        };
      });

      return {
        faqs: formatted,
        pagination: {
          page,
          totalPages: Math.ceil(count / limit) || 1,
        },
      };
    }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;

      const faq = await ctx.db.fAQ.findUnique({
        where: {
          id,
        },
        include: {
          category: true,
        },
      });

      if (!faq) {
        throw new Error("FAQ not found");
      }

      const formatted = {
        id: faq.id,
        category: faq.category?.name,
        question: faq.question,
        answer: faq.answer,
      };

      return {
        faq: formatted,
      };
    }),
});
