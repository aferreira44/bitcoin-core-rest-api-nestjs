import { Module } from '@nestjs/common';
import { BlockchainController } from './blockchain.controller';
import { BitcoinCoreModule } from '@app/bitcoin-core';

@Module({
  imports: [BitcoinCoreModule],
  controllers: [BlockchainController],
})
export class AppModule {}
