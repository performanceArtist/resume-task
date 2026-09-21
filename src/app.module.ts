import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile/profile.module';
import { PrismaModule } from './lib/prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from './lib/config/config.module';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      graphiql: true
    }),
    PrismaModule,
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
