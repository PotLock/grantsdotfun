import { JsonRpcProvider } from 'near-api-js/lib/providers';

const getRpcProvider = () => {
  const networkId = import.meta.env.VITE_NETWORK || "";
  const rpcUrl = networkId === "mainnet" 
    ? "https://rpc.mainnet.near.org"
    : "https://rpc.testnet.near.org";
  return new JsonRpcProvider({ url: rpcUrl });
};

export const ViewMethod = async (contractId: string, method: string, args: any) => {
  try {
    const provider = getRpcProvider();
    
    const response = await provider.query({
      request_type: "call_function",
      account_id: contractId,
      method_name: method,
      args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
      finality: "final"
    });

    if (!response || !('result' in response)) {
      return null;
    }

    try {
      if (response.result instanceof Array && response.result.length > 0 || response.result instanceof Uint8Array) {
        return JSON.parse(Buffer.from(response.result).toString());
      }
    
      return response.result;
    } catch (parseError) {
      console.error('Error parsing response result:', parseError);
      return response.result;
    }
    
  } catch (error) {
    console.error('ViewMethod error:', error);
    throw error;
  }
};

export const CallMethod = async (accountId:string,selector:any,contractId: string, method: string, args: any, options?: {
  gas?: string;
  deposit?: string;
  callbackUrl?: string;
}) => {
  try {
    
    if (!accountId) {
      throw new Error("Please connect wallet first");
    }
    const wallet = await selector.wallet();
    const transaction = {
      receiverId: contractId,
      callbackUrl: options?.callbackUrl,
      actions: [{
        type: 'FunctionCall',
        params: {
          methodName: method,
          args: args,
          gas: options?.gas || '30000000000000',
          deposit: options?.deposit || '0'
        }
      }]
    };

    const result = await wallet.signAndSendTransaction(transaction as any);
    
    return result;
  } catch (error) {
    console.error('CallMethod error:', error);
    throw error;
  }
};
