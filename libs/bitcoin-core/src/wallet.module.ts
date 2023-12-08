import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RpcService } from './rpc.service';
import { WalletService } from './wallet.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [WalletService, RpcService],
  exports: [WalletService],
})
export class WalletModule {}
