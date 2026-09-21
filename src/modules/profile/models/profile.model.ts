import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Experience } from './experience.model';
import { Skill } from './skill.model';

@ObjectType()
export class Profile {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [Experience], { nullable: true })
  experiences?: Experience[];

  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];
}
