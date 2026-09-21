import { Injectable } from '@nestjs/common';
import { safeParse, z } from 'zod';
import '../env';

const configSchema = z.object({
  PORT: z.preprocess(Number, z.number()),
  DB_NAME: z.string(),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.preprocess(Number, z.number()),
  DATABASE_URL: z.string(),
});

export type ConfigSchema = z.output<typeof configSchema>;

@Injectable()
export class ConfigService {
  public env: ConfigSchema;

  constructor() {
    const env = safeParse(configSchema, process.env);

    if (env.success) {
      this.env = env.data;
    } else {
      throw new Error(`Error while parsing configuration: ${env.error}`);
    }
  }
}
