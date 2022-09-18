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

  describe('getBestBlockHash', () => {
    it('getBestBlockHash method should be defined', () => {
      expect(blockchainController.getBestBlockHash).toBeDefined();
    });
  });

  describe('getblock', () => {
    it('getblock method should be defined', () => {
      expect(blockchainController.getblock).toBeDefined();
    });
  });

  describe('getBlockchainInfo', () => {
    it('getBlockchainInfo method should be defined', () => {
      expect(blockchainController.getBlockchainInfo).toBeDefined();
    });
  });

  describe('getBlockCount', () => {
    it('getBlockCount method should be defined', () => {
      expect(blockchainController.getBlockCount).toBeDefined();
    });
  });

  describe('getblockfilter', () => {
    it('getblockfilter method should be defined', () => {
      expect(blockchainController.getblockfilter).toBeDefined();
    });
  });

  describe('getblockfrompeer', () => {
    it('getblockfrompeer method should be defined', () => {
      expect(blockchainController.getblockfrompeer).toBeDefined();
    });
  });

  describe('getBlockHash', () => {
    it('getBlockHash method should be defined', () => {
      expect(blockchainController.getBlockHash).toBeDefined();
    });
  });

  describe('getblockheader', () => {
    it('getblockheader method should be defined', () => {
      expect(blockchainController.getblockheader).toBeDefined();
    });
  });

  describe('getblockstats', () => {
    it('getblockstats method should be defined', () => {
      expect(blockchainController.getblockstats).toBeDefined();
    });
  });

  describe('getchaintips', () => {
    it('getchaintips method should be defined', () => {
      expect(blockchainController.getchaintips).toBeDefined();
    });
  });

  describe('getchaintxstats', () => {
    it('getchaintxstats method should be defined', () => {
      expect(blockchainController.getchaintxstats).toBeDefined();
    });
  });

  describe('getdeploymentinfo', () => {
    it('getdeploymentinfo method should be defined', () => {
      expect(blockchainController.getdeploymentinfo).toBeDefined();
    });
  });

  describe('getdifficulty', () => {
    it('getdifficulty method should be defined', () => {
      expect(blockchainController.getdifficulty).toBeDefined();
    });
  });

  describe('getmempoolancestors', () => {
    it('getmempoolancestors method should be defined', () => {
      expect(blockchainController.getmempoolancestors).toBeDefined();
    });
  });

  describe('getmempooldescendants', () => {
    it('getmempooldescendants method should be defined', () => {
      expect(blockchainController.getmempooldescendants).toBeDefined();
    });
  });

  describe('getmempoolentry', () => {
    it('getmempoolentry method should be defined', () => {
      expect(blockchainController.getmempoolentry).toBeDefined();
    });
  });

  describe('getmempoolinfo', () => {
    it('getmempoolinfo method should be defined', () => {
      expect(blockchainController.getmempoolinfo).toBeDefined();
    });
  });

  describe('getrawmempool', () => {
    it('getrawmempool method should be defined', () => {
      expect(blockchainController.getrawmempool).toBeDefined();
    });
  });

  describe('gettxout', () => {
    it('gettxout method should be defined', () => {
      expect(blockchainController.gettxout).toBeDefined();
    });
  });

  describe('gettxoutproof', () => {
    it('gettxoutproof method should be defined', () => {
      expect(blockchainController.gettxoutproof).toBeDefined();
    });
  });

  describe('gettxoutsetinfo', () => {
    it('gettxoutsetinfo method should be defined', () => {
      expect(blockchainController.gettxoutsetinfo).toBeDefined();
    });
  });

  describe('preciousblock', () => {
    it('preciousblock method should be defined', () => {
      expect(blockchainController.preciousblock).toBeDefined();
    });
  });

  describe('pruneblockchain', () => {
    it('pruneblockchain method should be defined', () => {
      expect(blockchainController.pruneblockchain).toBeDefined();
    });
  });

  describe('savemempool', () => {
    it('savemempool method should be defined', () => {
      expect(blockchainController.savemempool).toBeDefined();
    });
  });

  describe('scantxoutset', () => {
    it('scantxoutset method should be defined', () => {
      expect(blockchainController.scantxoutset).toBeDefined();
    });
  });

  describe('verifychain', () => {
    it('verifychain method should be defined', () => {
      expect(blockchainController.verifychain).toBeDefined();
    });
  });

  describe('verifytxoutproof', () => {
    it('verifytxoutproof method should be defined', () => {
      expect(blockchainController.verifytxoutproof).toBeDefined();
    });
  });
});
