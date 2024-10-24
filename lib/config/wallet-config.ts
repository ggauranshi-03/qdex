
import { createConfig, http } from "wagmi";
import { base, mainnet, seiDevnet, sepolia } from "wagmi/chains";
import { injected, safe, walletConnect } from 'wagmi/connectors'

export const projectId = "6df5b9e1023ccd07754f28af8297819c";
 
if (!projectId) throw new Error("Project ID is not defined");
 

 
export const config = createConfig({
  chains: [mainnet, base,sepolia,seiDevnet],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [sepolia.id] : http(),
    [seiDevnet.id] :http()
  },
  ssr:true,
  
})