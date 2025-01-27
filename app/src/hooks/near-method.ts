import { NearRpcProvider } from 'near-rpc-providers';

const getRpcProvider = () => {
  const networkId = process.env.NEXT_PUBLIC_NETWORK || "";
  const provider = new NearRpcProvider(networkId === "mainnet" ? "near" : "neartestnet");
  return provider;
};

export const ViewMethod = async (contractId: string, method: string, args: any) => {
  try {
    const provider = getRpcProvider();
    
    const argsString = args ? JSON.stringify(args) : '{}';
    const argsBase64 = Buffer.from(argsString).toString('base64');
    
    const response = await provider.contractCall(
      contractId,
      'latest',
      method,
      argsBase64
    );

    if (!response || !response.result) {
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
