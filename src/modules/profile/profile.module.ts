import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { ExperienceResolver } from './experience.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [ProfileResolver, ExperienceResolver, ProfileService],
})
export class ProfileModule {}
