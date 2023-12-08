import { Injectable } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

@Injectable()
export class BitcoinCoreService {
  constructor(public blockchain: BlockchainService) {}
}
