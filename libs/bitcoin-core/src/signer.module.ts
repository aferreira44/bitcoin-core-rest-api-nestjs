import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RpcService } from './rpc.service';
import { SignerService } from './signer.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [SignerService, RpcService],
  exports: [SignerService],
})
export class SignerModule {}
