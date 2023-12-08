export interface TransactionOutput {
  txid: string;
  vout: number;
}

export interface ImportMemPoolOptions {
  use_current_time?: boolean;
  apply_fee_delta_priority?: boolean;
  apply_unbroadcast_set?: boolean;
}

export interface ScanObjectDescriptor {
  desc: string;
  range?: number | [number, number];
}

export type ScanObject = string | ScanObjectDescriptor;
