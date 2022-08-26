import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { BitcoinCoreService } from '../libs/bitcoin-core/src/bitcoin-core.service';

@ApiTags("Blockchain")
@Controller("/blockchain")
export class BlockchainController {
  constructor(
    private readonly bitcoinCoreService: BitcoinCoreService,
  ) {}

  @Get("/blockchainInfo")
  getBlockchainInfo(): Observable<any> {
    return this.bitcoinCoreService.getBlockchainInfo();
  }
}
