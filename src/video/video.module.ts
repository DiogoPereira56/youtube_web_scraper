import { Module } from '@nestjs/common';
import { VideoResolver } from './video.resolver';
import { VideoService } from './video.service';

@Module({
  imports: [],
  providers: [VideoService, VideoResolver],
  exports: [VideoService],
})
export class VideoModule {}
