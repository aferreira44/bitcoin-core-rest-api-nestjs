import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { BitcoinCoreService } from './bitcoin-core.service';

describe('BitcoinCoreService', () => {
  let bitcoinCoreservice: BitcoinCoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HttpModule],
      providers: [BitcoinCoreService],
      exports: [BitcoinCoreService],
    }).compile();

    bitcoinCoreservice = module.get<BitcoinCoreService>(BitcoinCoreService);
  });

  it('should be defined', () => {
    expect(bitcoinCoreservice).toBeDefined();
  });

  // TODO: add more tests
});
