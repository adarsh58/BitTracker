  // Sidebar imports
  import {
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  import arb from './Arb.png'
  import OP from './op.png'
  import BitCoin from './bitcoin.png'
  import jup from './jup.png'
  import logo from './logo.png'
  import cpu from './cpu.png'
  import gpu from './gpu.png'
  import fox from './fox.png'
  import hardware from './hardware.png'
  import dogecoin from './dogecoin.png'


  export const NavBarDataUilChart =
  {
    icon: UilChart
  }

  export const NavBarDataUilPackage =
  {
    icon: UilPackage
  }
  export const NavBarDataUilUsersAlt =
  {
    icon: UilUsersAlt
  }
  export const NavBarDataUilSignOutAlt =
  {
    icon: UilSignOutAlt
  }
  export const NavBarDatalogo =
  {
    icon: logo
  }

  //PortFolio Data
  export const PortFolioData = [
    {
      icon: arb,
      ticker: "Arb",
      price: "$65,000",
      value: "$2300",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      }
    }, {
      icon: BitCoin,
      ticker: "BitCoin",
      price: "$0.80",
      value: "$200", color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      }
    }, {
      icon: jup,
      ticker: "JUPITER",
      price: "$0.790",
      value: "$100",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      }

    }, {
      icon: OP,
      ticker: "Optimism",
      price: "$1.32",
      value: "$500",
      color: {
        backGround: "linear-gradient(90deg, rgba(0, 0, 255, 1) 0%, rgba(14, 170, 14, 1) 0%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      }
    }, {
      icon: dogecoin,
      ticker: "Doge",
      price: "$0.106",
      value: "$250",
      color: {
        backGround: "linear-gradient(90deg, rgba(175, 169, 245, 1) 100%, rgba(229, 43, 43, 1) 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      }
    }

  ]

  export const MiningData = [

    {
      icon: gpu,
      text: "GPUs Mining"
    },
    {
      icon: cpu,
      text: "CPUs Mining"
    }, {
      icon: fox,
      text: "MetaMask wallet"
    }, {
      icon: hardware,
      text: "Hardware Wallet"
    }

  ]