import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RpcService } from './rpc.service';
import { ZmqService } from './zmq.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [ZmqService, RpcService],
  exports: [ZmqService],
})
export class ZmqModule {}
