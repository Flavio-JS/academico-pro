import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { DisciplinesService } from './disciplines.service';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { DisciplineResponseDto } from './dto/discipline-response.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';
import { DisciplineFilters } from './types/discipline-filters.type';

@ApiTags('disciplines')
@Controller('disciplines')
export class DisciplinesController {
  constructor(private readonly disciplinesService: DisciplinesService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The discipline has been successfully created.',
    type: DisciplineResponseDto,
  })
  create(@Body() createDisciplineDto: CreateDisciplineDto) {
    return this.disciplinesService.create(createDisciplineDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all disciplines',
    type: [DisciplineResponseDto],
  })
  findAll(
    @Query()
    filters: DisciplineFilters,
  ) {
    return this.disciplinesService.findAll(filters);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found discipline',
    type: DisciplineResponseDto,
  })
  findOne(@Param('id') id: string) {
    return this.disciplinesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The discipline has been successfully updated.',
    type: DisciplineResponseDto,
  })
  update(@Param('id') id: string, @Body() updateDisciplineDto: UpdateDisciplineDto) {
    return this.disciplinesService.update(id, updateDisciplineDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The discipline has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.disciplinesService.remove(id);
  }
}
