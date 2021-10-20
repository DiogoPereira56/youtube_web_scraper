import { Resolver, Query } from '@nestjs/graphql';
import { VideoService } from './video.service';

@Resolver()
export class VideoResolver {
  constructor(private videoService: VideoService) {}

  @Query(() => String)
  async getHello() {
    return this.videoService.getHello();
  }
}
