import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';
import { ImportMemPoolOptions, TransactionOutput, ScanObject } from './types';

@Injectable()
export class BlockchainService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    DUMP_TX_OUT_SET: 'dumptxoutset',
    GET_BEST_BLOCK_HASH: 'getbestblockhash',
    GET_BLOCK: 'getblock',
    GET_BLOCKCHAIN_INFO: 'getblockchaininfo',
    GET_BLOCK_COUNT: 'getblockcount',
    GET_BLOCK_FILTER: 'getblockfilter',
    GET_BLOCK_FROM_PEER: 'getblockfrompeer',
    GET_BLOCK_HASH: 'getblockhash',
    GET_BLOCK_HEADER: 'getblockheader',
    GET_BLOCK_STATS: 'getblockstats',
    GET_CHAIN_STATES: 'getchainstates',
    GET_CHAIN_TIPS: 'getchaintips',
    GET_CHAIN_TX_STATS: 'getchaintxstats',
    GET_DEPLOYMENT_INFO: 'getdeploymentinfo',
    GET_DIFFICULTY: 'getdifficulty',
    GET_MEMPOOL_ANCESTORS: 'getmempoolancestors',
    GET_MEMPOOL_DESCENDANTS: 'getmempooldescendants',
    GET_MEMPOOL_ENTRY: 'getmempoolentry',
    GET_MEMPOOL_INFO: 'getmempoolinfo',
    GET_RAW_MEMPOOL: 'getrawmempool',
    GET_TX_OUT: 'gettxout',
    GET_TX_OUT_PROOF: 'gettxoutproof',
    GET_TX_OUT_SET_INFO: 'gettxoutsetinfo',
    GET_TX_SPENDING_PREV_OUT: 'gettxspendingprevout',
    IMPORT_MEMPOOL: 'importmempool',
    LOAD_TX_OUT_SET: 'loadtxoutset',
    PRECIOUS_BLOCK: 'preciousblock',
    PRUNE_BLOCKCHAIN: 'pruneblockchain',
    SAVE_MEMPOOL: 'savemempool',
    SCAN_BLOCKS: 'scanblocks',
    SCAN_TX_OUT_SET: 'scantxoutset',
    VERIFY_CHAIN: 'verifychain',
    VERIFY_TX_OUT_PROOF: 'verifytxoutproof',
  };

  dumpTxOutSet(path: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.DUMP_TX_OUT_SET, {
      path,
    });
  }

  getBestBlockHash(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BEST_BLOCK_HASH);
  }

  getBlock(blockhash: string, verbosity = 1): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCK, {
      blockhash,
      verbosity,
    });
  }

  getBlockchainInfo(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCKCHAIN_INFO);
  }

  getBlockCount(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCK_COUNT);
  }

  getBlockFilter(blockhash: string, filtertype = 'basic'): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCK_FILTER, {
      blockhash,
      filtertype,
    });
  }

  getBlockFromPeer(blockhash: string, peer_id: number): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCK_FROM_PEER, {
      blockhash,
      peer_id,
    });
  }

  getblockhash(height: number): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCK_HASH, {
      height: Number(height),
    });
  }

  getBlockHeader(blockhash: string, verbose = true): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCK_HEADER, {
      blockhash,
      verbose,
    });
  }

  getBlockStats(hash_or_height: string | number): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCK_STATS, {
      hash_or_height,
    });
  }

  getChainStates(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_CHAIN_STATES);
  }

  getChainTips(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_CHAIN_TIPS);
  }

  getChainTxStats(nblocks: number, blockhash: string) {
    return this.rpcService.request(this.availableMethods.GET_CHAIN_TX_STATS, {
      nblocks,
      blockhash,
    });
  }

  getDeploymentInfo(blockhash: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_DEPLOYMENT_INFO, {
      blockhash,
    });
  }

  getDifficulty(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_DIFFICULTY);
  }

  getMempoolAncestors(txid: string, verbose = false): Observable<any> {
    return this.rpcService.request(
      this.availableMethods.GET_MEMPOOL_ANCESTORS,
      {
        txid,
        verbose,
      },
    );
  }

  getMempoolDescendants(txid: string, verbose = false): Observable<any> {
    return this.rpcService.request(
      this.availableMethods.GET_MEMPOOL_DESCENDANTS,
      {
        txid,
        verbose,
      },
    );
  }

  getMempoolEntry(txid: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_MEMPOOL_ENTRY, {
      txid,
    });
  }

  getMempoolInfo(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_MEMPOOL_INFO);
  }

  getRawMempool(verbose = false, mempool_sequence = false): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_RAW_MEMPOOL, {
      verbose,
      mempool_sequence,
    });
  }

  getTxOut(txid: string, n: number, include_mempool = true): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_TX_OUT, {
      txid,
      n,
      include_mempool,
    });
  }

  getTxOutProof(txids: string[], blockhash?: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_TX_OUT_PROOF, {
      txids,
      blockhash,
    });
  }

  getTxOutSetInfo(
    hash_type = 'hash_serialized_3',
    hash_or_height: string | number,
    use_index = true,
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_TX_OUT_SET_INFO, {
      hash_type,
      hash_or_height,
      use_index,
    });
  }

  getTxSpendingPrevOut(outputs: [TransactionOutput]): Observable<any> {
    return this.rpcService.request(
      this.availableMethods.GET_TX_SPENDING_PREV_OUT,
      {
        outputs,
      },
    );
  }

  importMemPool(
    filepath: string,
    options?: ImportMemPoolOptions,
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.IMPORT_MEMPOOL, {
      filepath,
      options,
    });
  }

  loadTxOutSet(path: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.LOAD_TX_OUT_SET, {
      path,
    });
  }

  preciousBlock(blockhash: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.PRECIOUS_BLOCK, {
      blockhash,
    });
  }

  pruneBlockchain(height: number): Observable<any> {
    return this.rpcService.request(this.availableMethods.PRUNE_BLOCKCHAIN, {
      height,
    });
  }

  saveMempool(): Observable<any> {
    return this.rpcService.request(this.availableMethods.SAVE_MEMPOOL);
  }

  scanBlocks(
    actions: string,
    scanobjects: [ScanObject],
    start_height = 0,
    stop_height?: number,
    filtertype = 'basic',
    options?: {
      filter_false_positives?: boolean;
    },
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.SCAN_BLOCKS, {
      actions,
      scanobjects,
      start_height,
      stop_height,
      filtertype,
      options,
    });
  }

  scanTxOutSet(action: string, scanobjects: [ScanObject]): Observable<any> {
    return this.rpcService.request(this.availableMethods.SCAN_TX_OUT_SET, {
      action,
      scanobjects,
    });
  }

  verifyChain(checklevel = 3, nblocks = 6): Observable<any> {
    return this.rpcService.request(this.availableMethods.VERIFY_CHAIN, {
      checklevel,
      nblocks,
    });
  }

  verifyTxOutProof(proof: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.VERIFY_TX_OUT_PROOF, {
      proof,
    });
  }
}
