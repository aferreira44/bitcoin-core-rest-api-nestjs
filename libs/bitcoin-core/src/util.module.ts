import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RpcService } from './rpc.service';
import { UtilService } from './util.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [UtilService, RpcService],
  exports: [UtilService],
})
export class UtilModule {}
