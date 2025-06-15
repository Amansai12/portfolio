-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "linkedIn" TEXT,
    "github" TEXT,
    "liveLink" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
