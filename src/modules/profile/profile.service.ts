import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../lib/prisma/prisma.service';
import { Profile } from './models/profile.model';
import { Experience } from './models/experience.model';
import { Skill } from './models/skill.model';
import { Project } from './models/project.model';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfile(): Promise<Profile> {
    const profile = await this.prisma.profile.findFirst();
    if (!profile) {
      throw new NotFoundException();
    }

    return profile;
  }

  async getExperiences(profileId: number): Promise<Experience[]> {
    const experiences = await this.prisma.experience.findMany({
      where: {
        profileId,
      },
    });

    return experiences;
  }

  async getProjects(experienceId: number): Promise<Project[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        experienceId,
      },
    });

    return projects;
  }

  async getSkills(profileId: number): Promise<Skill[]> {
    const skills = await this.prisma.profileSkill.findMany({
      where: {
        profileId,
      },
      include: {
        skill: true,
      },
    });

    return skills.map(({ skill, level }) => ({
      id: skill.id,
      name: skill.name,
      level,
    }));
  }
}
