import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { BitcoinCoreModule } from '@app/bitcoin-core/bitcoin-core.module';
import { BlockchainController } from './blockchain.controller';

describe('BlockchainController', () => {
  let blockchainController: BlockchainController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), BitcoinCoreModule],
      controllers: [BlockchainController],
    }).compile();

    blockchainController = app.get<BlockchainController>(BlockchainController);
  });

  describe('getBlockchainInfo', () => {
    it('getBlockchainInfo method should be defined', () => {
      expect(blockchainController.getBlockchainInfo).toBeDefined();
    });

    // TODO: add more tests
  });
});
