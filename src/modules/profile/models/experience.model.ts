import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Project } from './project.model';

@ObjectType()
export class Experience {
  @Field(() => Int)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => [Project], { nullable: true })
  projects?: Project[];
}
