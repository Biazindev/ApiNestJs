import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { DocumentosService } from './documentos.service';
import { CreateDocumentoDto, UpdateDocumentoDto } from './documentos.dto';

@Controller('documentos')
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  @Post()
  async createDocumento(@Body() createDocumentoDto: CreateDocumentoDto) {
    return this.documentosService.createDocumento(createDocumentoDto);
  }

  @Get()
  async findAll() {
    return this.documentosService.findAllDocumentos();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.documentosService.findOneDocumento(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDocumentoDto: UpdateDocumentoDto,
  ) {
    return this.documentosService.updateDocumento(+id, updateDocumentoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.documentosService.removeDocumento(+id);
  }
}
