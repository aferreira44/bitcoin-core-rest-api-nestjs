import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RpcService } from './rpc.service';
import { MiningService } from './mining.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [MiningService, RpcService],
  exports: [MiningService],
})
export class MiningModule {}
