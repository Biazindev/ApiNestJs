import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.documento.create({
    data: {
      nomeDoDocumento: 'Exemplo Documento',
      numeroDoDocumento: '12345',
      emitente: 'Emitente Exemplo',
      valorTotalTributos: 100.00,
      valorLiquido: 90.00,
    },
  });
  console.log('Documento inserido!');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
