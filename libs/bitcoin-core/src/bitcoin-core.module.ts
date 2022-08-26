import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BitcoinCoreService } from './bitcoin-core.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [BitcoinCoreService],
  exports: [BitcoinCoreService],
})
export class BitcoinCoreModule {}
