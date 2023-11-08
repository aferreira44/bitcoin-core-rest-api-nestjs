import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './global-exception.filter';
import { ConfigModule } from '@nestjs/config';
import { BlockchainController } from './blockchain.controller';
import { BitcoinCoreModule } from '@app/bitcoin-core';

@Module({
  imports: [ConfigModule.forRoot(), BitcoinCoreModule],
  controllers: [BlockchainController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
