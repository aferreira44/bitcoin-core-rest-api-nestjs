import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
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
  getBlock(
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
  getBlockFilter(
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
  getBlockFromPeer(
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

  @Get('/blockHeader/:blockHash')
  @ApiOperation({
    summary: 'Returns an Object with information about blockheader <hash>',
  })
  getBlockHeader(
    @Req() req: Request,
    @Param('blockHash') blockHash: string,
  ): Observable<any> {
    return this.bitcoinCoreService.getBlockHeader(blockHash).pipe(
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

  @Get('/blockStats/:hashOrHeight')
  @ApiOperation({
    summary:
      'Compute per block statistics for a given window. All amounts are in satoshis.',
  })
  getBlockStats(
    @Req() req: Request,
    // TODO: check if it can be number (string | number), don't load parameter in Swagger UI
    @Param('hashOrHeight') hashOrHeight: string,
  ): Observable<any> {
    const isHash = new RegExp('[a-zA-Z]').test(hashOrHeight);
    return this.bitcoinCoreService
      .getBlockStats(isHash ? hashOrHeight : parseInt(hashOrHeight, 10))
      .pipe(
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

  @Get('/chainTips')
  @ApiOperation({
    summary:
      'Return information about all known tips in the block tree, including the main chain as well as orphaned branches.',
  })
  getChainTips(@Req() req: Request): Observable<any> {
    return this.bitcoinCoreService.getChainTips().pipe(
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

  @Get('/chainTxStats')
  @ApiOperation({
    summary:
      'Compute statistics about the total number and rate of transactions in the chain.',
  })
  @ApiQuery({ name: 'nBlocks', required: false, type: Number })
  @ApiQuery({ name: 'blockHash', required: false, type: String })
  getChainTxStats(
    @Req() req: Request,
    @Query('nBlocks') nBlocks?: number,
    @Query('blockHash') blockHash?: string,
  ): Observable<any> {
    // TODO: improve params object
    return this.bitcoinCoreService.getChainTxStats(nBlocks, blockHash).pipe(
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
