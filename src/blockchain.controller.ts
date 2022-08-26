import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BitcoinCoreService } from '../libs/bitcoin-core/src/bitcoin-core.service';

@ApiTags('Blockchain')
@Controller('/blockchain')
export class BlockchainController {
  constructor(private readonly bitcoinCoreService: BitcoinCoreService) {}

  @Get('/blockchainInfo')
  getBlockchainInfo(@Req() req: Request): Observable<any> {
    return this.bitcoinCoreService.getBlockchainInfo().pipe(
      map((response) => {
        Logger.log(`${req.path}: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError((error) => {
        Logger.error(`${req.path}: ${JSON.stringify(error.response)}`);
        throw new HttpException(error.message, error.status);
      }),
    );
  }

  @Get('/blockHash/:blockHeight')
  getBlockHash(
    @Req() req: Request,
    @Param('blockHeight') blockHeight: number,
  ): Observable<any> {
    return this.bitcoinCoreService.getBlockHash(blockHeight).pipe(
      map((response) => {
        Logger.log(`${req.path}: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError((error) => {
        Logger.error(`${req.path}: ${JSON.stringify(error.response)}`);
        throw new HttpException(error.message, error.status);
      }),
    );
  }
}
