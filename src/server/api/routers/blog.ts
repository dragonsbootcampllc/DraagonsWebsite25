import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  getMany: publicProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).default(20),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { page, limit } = input;
      const skip = (page - 1) * limit;

      const blogs = await ctx.db.blog.findMany({
        select: {
          id: true,
          type: true,
          slug: true,
          title: true,
          image_id: true,
          image_extension: true,
        },
        where: {
          status: "published",
        },
        skip,
        take: limit,
      });

      const count = await ctx.db.blog.count();

      const formatted = blogs.map((blog) => {
        return {
          id: blog.id,
          type: blog.type,
          slug: blog.slug,
          title: blog.title,
          image: blog.image_id
            ? `${blog.image_id}.${blog.image_extension}`
            : null,
        };
      });

      return {
        blogs: formatted,
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

      const blog = await ctx.db.blog.findUnique({
        where: {
          id,
          status: "published",
        },
        include: {
          company: true,
          tags: true,
        },
      });

      if (!blog) {
        throw new Error("Blog not found");
      }

      const formatted = {
        id: blog.id,
        type: blog.type,
        slug: blog.slug,
        title: blog.title,
        content: blog.content,
        image: blog.image_id
          ? `${blog.image_id}.${blog.image_extension}`
          : null,
        company: blog.type === "case-study" ? blog.company : null,
        challenge: blog.type === "case-study" ? blog.challenge : null,
        solution: blog.type === "case-study" ? blog.solution : null,
        results: blog.type === "case-study" ? blog.results : null,
        tags: blog.tags.map((tag) => tag.name),
      };

      return {
        blog: formatted,
      };
    }),
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { slug } = input;

      const blog = await ctx.db.blog.findUnique({
        where: {
          slug,
          status: "published",
        },
        include: {
          company: true,
          tags: true,
        },
      });

      if (!blog) {
        throw new Error("Blog not found");
      }

      const formatted = {
        id: blog.id,
        type: blog.type,
        slug: blog.slug,
        title: blog.title,
        content: blog.content,
        image: blog.image_id
          ? `${blog.image_id}.${blog.image_extension}`
          : null,
        company: blog.type === "case-study" ? blog.company : null,
        challenge: blog.type === "case-study" ? blog.challenge : null,
        solution: blog.type === "case-study" ? blog.solution : null,
        results: blog.type === "case-study" ? blog.results : null,
        tags: blog.tags.map((tag) => tag.name),
      };

      return {
        blog: formatted,
      };
    }),
});
