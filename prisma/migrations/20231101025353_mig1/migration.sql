-- CreateTable
CREATE TABLE "Headphones" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "installment_price" DECIMAL(65,30) NOT NULL,
    "installments" DECIMAL(65,30) NOT NULL,
    "img_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Headphones_pkey" PRIMARY KEY ("id")
);
