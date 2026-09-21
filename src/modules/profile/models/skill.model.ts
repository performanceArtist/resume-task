import { Field, Int, ObjectType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { Level } from '../../../generated/prisma/enums';

registerEnumType(Level, {
  name: 'Level',
});

@ObjectType()
export class Skill {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Level)
  level: Level;
}
