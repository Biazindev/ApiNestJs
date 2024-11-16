import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentosModule } from './documentos/documentos.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [DocumentosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
