import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RpcService } from './rpc.service';
import { NetworkService } from './network.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [NetworkService, RpcService],
  exports: [NetworkService],
})
export class NetworkModule {}
