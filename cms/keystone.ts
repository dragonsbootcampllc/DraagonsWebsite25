import dotenv from "dotenv";
import path from "path";

dotenv.config();

import { config, list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  password,
  select,
  text,
  relationship,
  image,
  json, // Add json import for array fields
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import { withAuth, session } from "./auth";

export default config(
  withAuth({
    server: {
      port: Number(process.env.PORT) || 3001,
    },
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL ?? "postgres://localhost:5432",
    },
    storage: {
      images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `/uploads/images/${path}`,
        serverRoute: {
          path: "/uploads/images",
        },
        storagePath: path.join(process.cwd(), "../", "public/uploads/images"),
      },
    },
    lists: {
      User: list({
        access: allowAll,
        fields: {
          username: text({
            validation: { isRequired: true },
            isIndexed: "unique",
          }),
          password: password({
            validation: { isRequired: true },
          }),
        },
      }),
      Blog: list({
        access: allowAll,
        fields: {
          type: select({
            options: [
              { label: "Blog", value: "blog" },
              { label: "Case Study", value: "case-study" },
              { label: "Market Insight", value: "market-insight" },
            ],
            defaultValue: "blog",
          }),
          slug: text({
            validation: {
              isRequired: true,
              match: {
                regex: /^[a-z0-9-]+$/,
                explanation:
                  "The slug must only contain lowercase letters, numbers, and dashes (no spaces or special characters).",
              },
            },
            isIndexed: "unique",
          }),
          title: text({
            validation: { isRequired: true },
          }),
          content: document({
            formatting: true,
            links: true,
            dividers: true,
            layouts: [
              [1, 1],
              [1, 1, 1],
              [2, 1],
              [1, 2],
              [1, 2, 1],
            ],
          }),
          image: image({
            storage: "images",
            label: "Image",
          }),
          company: relationship({
            ref: "Company.blogs",
            many: false,
          }),
          challenge: text(),
          solution: text(),
          // Updated results to be an array of strings
          results: json({
            defaultValue: [],
          }),
          tags: relationship({
            ref: "Tag.blogs",
            many: true,
          }),
          status: select({
            options: [
              { label: "Published", value: "published" },
              { label: "Drafted", value: "drafted" },
            ],
            defaultValue: "drafted",
          }),
        },
        hooks: {
          validateInput: async ({ resolvedData, addValidationError }) => {
            if (resolvedData.type === "case-study") {
              if (!resolvedData.image) {
                addValidationError(
                  "The 'Image' field is required for case studies.",
                );
              }

              if (!resolvedData.company) {
                addValidationError(
                  "The 'Company' field is required for case studies.",
                );
              }

              if (!resolvedData.challenge) {
                addValidationError(
                  "The 'Challenge' field is required for case studies.",
                );
              }

              if (!resolvedData.solution) {
                addValidationError(
                  "The 'Solution' field is required for case studies.",
                );
              }

              if (!resolvedData.results) {
                addValidationError(
                  "The 'Results' field is required for case studies.",
                );
              }
            }
          },
        },
      }),
      FAQ: list({
        access: allowAll,
        ui: {
          label: "FAQs",
        },
        fields: {
          category: relationship({
            ref: "Category.faqs",
            many: false,
          }),
          question: text({
            validation: { isRequired: true },
          }),
          answer: document({
            formatting: true,
            links: true,
            dividers: true,
            layouts: [
              [1, 1],
              [1, 1, 1],
              [2, 1],
              [1, 2],
              [1, 2, 1],
            ],
          }),
        },
      }),
      Company: list({
        access: allowAll,
        fields: {
          name: text({
            validation: { isRequired: true },
            isIndexed: "unique",
          }),
          size: text({
            validation: { isRequired: true },
          }),
          website: text({
            validation: { isRequired: true },
          }),
          address: text({
            validation: { isRequired: true },
          }),
          fund: text({
            validation: { isRequired: true },
          }),
          features: json({
            defaultValue: [],
          }),
          industries: relationship({
            ref: "Industry.companies",
            many: true,
          }),
          blogs: relationship({
            ref: "Blog.company",
            many: true,
            ui: {
              createView: { fieldMode: "hidden" },
              itemView: { fieldMode: "hidden" },
            },
          }),
          typeOfCollaboration: text({
            label: "Type of Collaboration",
            validation: { isRequired: false },
          }),
          duration: text({
            label: "Duration",
            validation: { isRequired: false },
          }),
          status: text({
            label: "Status",
            validation: { isRequired: false },
          }),
          type: text({
            label: "Type",
            validation: { isRequired: false },
          }),
        },
      }),
      Industry: list({
        access: allowAll,
        fields: {
          name: text({
            validation: { isRequired: true },
            isIndexed: "unique",
          }),
          companies: relationship({
            ref: "Company.industries",
            many: true,
            ui: {
              createView: { fieldMode: "hidden" },
              itemView: { fieldMode: "hidden" },
            },
          }),
        },
      }),
      Category: list({
        access: allowAll,
        fields: {
          name: text({
            validation: { isRequired: true },
            isIndexed: "unique",
          }),
          faqs: relationship({
            ref: "FAQ.category",
            many: true,
            ui: {
              createView: { fieldMode: "hidden" },
              itemView: { fieldMode: "hidden" },
            },
          }),
        },
      }),
      Tag: list({
        access: allowAll,
        fields: {
          name: text({
            validation: { isRequired: true },
            isIndexed: "unique",
          }),
          blogs: relationship({
            ref: "Blog.tags",
            many: true,
          }),
        },
      }),
    },
    session,
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
  }),
);
