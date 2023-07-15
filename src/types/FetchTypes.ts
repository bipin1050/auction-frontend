export type Product = {
  _id: string;
  productName: string;
  image: string;
  enableBid?: boolean;
  minimumBid?: number;
  enableInstantBuy?: boolean;
  instantBuy?: number;
  endDate: Date;
  status?: string;
  userid: string;
  bidCount: number;
  highestBid : number;
  winner: string;
  userBid: number;
};

export type FetchState<T> = {
  data: T[];
  isLoading: boolean;
  error: string | null;
};