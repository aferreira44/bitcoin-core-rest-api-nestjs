import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RpcService } from './rpc.service';
import { BlockchainService } from './blockchain.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [BlockchainService, RpcService],
  exports: [BlockchainService],
})
export class BlockchainModule {}
