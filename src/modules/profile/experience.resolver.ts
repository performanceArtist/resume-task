import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Experience } from './models/experience.model';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private readonly profileService: ProfileService) {}

  @ResolveField()
  async projects(@Parent() experience: Experience) {
    return this.profileService.getProjects(experience.id);
  }
}
