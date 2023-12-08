import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RpcService } from './rpc.service';
import { ControlService } from './control.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [ControlService, RpcService],
  exports: [ControlService],
})
export class ControlModule {}
