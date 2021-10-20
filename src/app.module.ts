import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { VideoModule } from './video/video.module';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true }), VideoModule],
})
export class AppModule {}
