/*
  Warnings:

  - Added the required column `publishedDate` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Books" ADD COLUMN     "publishedDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
