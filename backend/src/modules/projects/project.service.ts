import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './create.project.dto';
import { deleteFiles } from '../media/media.controller';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async getProjects() {
    return await this.projectRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async getProject(projectId: string) {
    return await this.projectRepository.findOne({ where: { id: projectId } });
  }

  async createProject(createProjectDto: CreateProjectDto) {
    return await this.projectRepository.save(
      this.projectRepository.create(createProjectDto),
    );
  }

  async deleteProject(projectId: string) {
    const projectItem = await this.projectRepository.findOne({
      where: { id: projectId },
    });

    deleteFiles([...projectItem.medias, projectItem.image]);

    return await this.projectRepository.delete(projectId);
  }
}
