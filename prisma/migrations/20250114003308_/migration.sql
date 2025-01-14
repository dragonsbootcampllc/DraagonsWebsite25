-- AlterTable
ALTER TABLE "_Blog_tags" ADD CONSTRAINT "_Blog_tags_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_Blog_tags_AB_unique";

-- AlterTable
ALTER TABLE "_Company_industries" ADD CONSTRAINT "_Company_industries_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_Company_industries_AB_unique";
