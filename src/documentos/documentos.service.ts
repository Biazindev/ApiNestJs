import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DocumentosService {
  constructor(private readonly prisma: PrismaService) {}

  async createDocumento(createDocumentoDto: any) {
    try {
      return await this.prisma.documento.create({ data: createDocumentoDto });
    } catch (error) {
      console.error('Erro ao criar documento:', error);
      throw new Error('Erro ao criar documento');
    }
  }

  async findAllDocumentos() {
    try {
      return await this.prisma.documento.findMany();
    } catch (error) {
      console.error('Erro ao buscar documentos:', error);
      throw new Error('Erro ao buscar documentos');
    }
  }

  async findOneDocumento(id: number) {
    try {
      const documento = await this.prisma.documento.findUnique({
        where: { id },
      });

      if (!documento) {
        throw new Error(`Documento com id ${id} não encontrado.`);
      }

      return documento;
    } catch (error) {
      console.error(`Erro ao buscar documento com id ${id}:`, error);
      throw new Error(`Erro ao buscar documento com id ${id}`);
    }
  }

  async updateDocumento(id: number, updateDocumentoDto: any) {
    try {
      const documentoExistente = await this.prisma.documento.findUnique({
        where: { id },
      });

      if (!documentoExistente) {
        throw new Error(`Documento com id ${id} não encontrado.`);
      }

      return await this.prisma.documento.update({
        where: { id },
        data: updateDocumentoDto,
      });
    } catch (error) {
      console.error(`Erro ao atualizar documento com id ${id}:`, error);
      throw new Error(`Erro ao atualizar documento com id ${id}`);
    }
  }

  async removeDocumento(id: number) {
    try {
      const documentoExistente = await this.prisma.documento.findUnique({
        where: { id },
      });

      if (!documentoExistente) {
        throw new Error(`Documento com id ${id} não encontrado.`);
      }

      return await this.prisma.documento.delete({
        where: { id },
      });
    } catch (error) {
      console.error(`Erro ao remover documento com id ${id}:`, error);
      throw new Error(`Erro ao remover documento com id ${id}`);
    }
  }
}
