import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlockchainController } from './blockchain.controller';
import { BitcoinCoreModule } from '@app/bitcoin-core';

@Module({
  imports: [ConfigModule.forRoot(), BitcoinCoreModule],
  controllers: [BlockchainController],
})
export class AppModule {}
