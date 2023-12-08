import { Module } from '@nestjs/common';
import { BitcoinCoreService } from './bitcoin-core.service';
import { BlockchainModule } from './blockchain.module';
import { ControlModule } from './control.module';
import { MiningModule } from './mining.module';
import { NetworkModule } from './network.module';
import { RawTransactionsModule } from './rawTransactions.module';
import { SignerModule } from './signer.module';
import { UtilModule } from './util.module';
import { WalletModule } from './wallet.module';
import { ZmqModule } from './zmq.module';

@Module({
  imports: [
    BlockchainModule,
    ControlModule,
    MiningModule,
    NetworkModule,
    RawTransactionsModule,
    SignerModule,
    UtilModule,
    WalletModule,
    ZmqModule,
  ],
  providers: [BitcoinCoreService],
  exports: [BitcoinCoreService],
})
export class BitcoinCoreModule {}
