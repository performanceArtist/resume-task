import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Profile } from './models/profile.model';
import { ProfileService } from './profile.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile)
  async profile(): Promise<Profile> {
    return this.profileService.getProfile();
  }

  @ResolveField()
  async experiences(@Parent() profile: Profile) {
    return this.profileService.getExperiences(profile.id);
  }

  @ResolveField()
  async skills(@Parent() profile: Profile) {
    return this.profileService.getSkills(profile.id);
  }
}
