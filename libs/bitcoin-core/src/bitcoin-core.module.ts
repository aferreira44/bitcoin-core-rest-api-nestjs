import { Module } from '@nestjs/common';
import { BitcoinCoreService } from './bitcoin-core.service';
import { BlockchainModule } from './blockchain.module';
import { ControlModule } from './control.module';

@Module({
  imports: [BlockchainModule, ControlModule],
  providers: [BitcoinCoreService],
  exports: [BitcoinCoreService],
})
export class BitcoinCoreModule {}
