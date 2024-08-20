import './App.css'
import WormholeConnect from '@wormhole-foundation/wormhole-connect';
import WormholeComponent from "../WormHoleComponents/WormholdConnect";
// import WalletAddress from "../helpers/index";

function App() {

  return (
    <>
      <WormholeConnect />
      <WormholeComponent />
      {/* <WalletAddress /> */}
    </>
  )
}

export default App
