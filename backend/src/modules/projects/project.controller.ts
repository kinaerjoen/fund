import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { CreateProjectDto } from './create.project.dto';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  async getProjects() {
    return await this.projectService.getProjects();
  }

  @Get(':projectId')
  async getProject(@Param('projectId') projectId: string) {
    return await this.projectService.getProject(projectId);
  }

  @Post()
  @UseGuards(AccessTokenGuard)
  async createProject(@Body() createProjectDto: CreateProjectDto) {
    return await this.projectService.createProject(createProjectDto);
  }

  @Delete(':projectId')
  @UseGuards(AccessTokenGuard)
  async deleteProject(@Param('projectId') projectId: string) {
    return await this.projectService.deleteProject(projectId);
  }
}
