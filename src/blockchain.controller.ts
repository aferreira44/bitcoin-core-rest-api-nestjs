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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BitcoinCoreService } from '../libs/bitcoin-core/src/bitcoin-core.service';

@ApiTags('Blockchain')
@Controller('/blockchain')
export class BlockchainController {
  constructor(private readonly bitcoinCoreService: BitcoinCoreService) {}

  @Get('/bestBlockHash')
  @ApiOperation({
    summary:
      'Returns the hash of the best (tip) block in the most-work fully-validated chain',
  })
  getBestBlockHash(@Req() req: Request): Observable<any> {
    return this.bitcoinCoreService.getBestBlockHash().pipe(
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

  @Get('/block/:blockHash')
  @ApiOperation({
    summary: 'Returns an Object with information about block <hash>',
  })
  getblock(
    @Req() req: Request,
    @Param('blockHash') blockHash: string,
  ): Observable<any> {
    return this.bitcoinCoreService.getBlock(blockHash).pipe(
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

  @Get('/blockchainInfo')
  @ApiOperation({
    summary:
      'Returns an object containing various state info regarding blockchain processing',
  })
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

  @Get('/blockCount')
  @ApiOperation({
    summary: 'Returns the height of the most-work fully-validated chain',
  })
  getBlockCount(@Req() req: Request): Observable<any> {
    return this.bitcoinCoreService.getBlockCount().pipe(
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

  @Get('/blockFilter/:blockHash')
  @ApiOperation({
    summary: 'Retrieve a BIP 157 content filter for a particular block',
  })
  getblockfilter(
    @Req() req: Request,
    @Param('blockHash') blockHash: string,
  ): Observable<any> {
    return this.bitcoinCoreService.getBlockFilter(blockHash).pipe(
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

  @Get('/blockfrompeer/:blockHash')
  @ApiOperation({
    summary: 'Attempt to fetch block from a given peer',
  })
  getblockfrompeer(
    @Req() req: Request,
    @Param('blockHash') blockHash: string,
    @Param('peerId') peerId: number,
  ): Observable<any> {
    return this.bitcoinCoreService.getBlockFromPeer(blockHash, peerId).pipe(
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
  @ApiOperation({
    summary: 'Returns hash of block in best-block-chain at height provided',
  })
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

  getblockheader(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getblockstats(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getchaintips(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getchaintxstats(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getdeploymentinfo(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getdifficulty(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getmempoolancestors(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getmempooldescendants(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getmempoolentry(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getmempoolinfo(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  getrawmempool(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  gettxout(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  gettxoutproof(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  gettxoutsetinfo(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  preciousblock(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  pruneblockchain(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  savemempool(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  scantxoutset(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  verifychain(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  verifytxoutproof(): Observable<any> {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }
}
