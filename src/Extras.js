export const MINESWEEPER_ADDRESS =
  "0:1a6af6baff08ca7a73796e55d5d87d3c93235050491af10e4208564d519d8c56";
export const MINESWEEPER_ABI = {
  "ABI version": 2,
  version: "2.2",
  header: ["pubkey", "time", "expire"],
  functions: [
    {
      name: "createBoard",
      inputs: [{ name: "sweepercode", type: "cell" }],
      outputs: [],
    },
    {
      name: "lastestBoardWithMsg",
      inputs: [],
      outputs: [{ name: "value0", type: "address" }],
    },
    {
      name: "lastestBoardWithoutMsg",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: [{ name: "value0", type: "address" }],
    },
    {
      name: "constructor",
      inputs: [],
      outputs: [],
    },
  ],
  data: [],
  events: [
    {
      name: "_boardCreated",
      inputs: [{ name: "_board", type: "address" }],
      outputs: [],
    },
  ],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "boardCreated", type: "map(address,address[])" },
  ],
};

export const MINESWEEPERGAME_ABI = {
  "ABI version": 2,
  version: "2.2",
  header: ["pubkey", "time", "expire"],
  functions: [
    {
      name: "generateRandomMinesNumbers",
      inputs: [{ name: "_mineCount", type: "uint256" }],
      outputs: [{ name: "value0", type: "uint256[]" }],
    },
    {
      name: "checkMineNumber",
      inputs: [{ name: "_num", type: "uint256" }],
      outputs: [{ name: "answ", type: "bool" }],
    },
    {
      name: "move",
      inputs: [{ name: "_id", type: "uint256" }],
      outputs: [{ name: "result", type: "bool" }],
    },
    {
      name: "checkAreaMoved",
      inputs: [{ name: "_num", type: "uint256" }],
      outputs: [{ name: "_result", type: "bool" }],
    },
    {
      name: "checkIsWon",
      inputs: [],
      outputs: [{ name: "result", type: "bool" }],
    },
    {
      name: "checkIsLost",
      inputs: [],
      outputs: [{ name: "result", type: "bool" }],
    },
    {
      name: "constructor",
      inputs: [],
      outputs: [],
    },
  ],
  data: [],
  events: [],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "mineNumbers", type: "uint256[]" },
    { name: "moved", type: "uint256[]" },
    { name: "isLost", type: "bool" },
    { name: "isWon", type: "bool" },
  ],
};

export const shortenText = (str, n1 = 6, n2 = 4) => {
  if (str) {
    return `${str.slice(0, n1)}...${str.slice(str.length - n2)}`;
  }
  return "";
};

export const SWEEPER_CODE =
  "te6ccgECJAEABVkAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBwQjAQAFA/7tRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4ZgwjXGCD5AQHTAAGU0/8DAZMC+ELi+RDyqJXTAAHyeuLTPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds8CwgGAATyPANS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwgIAgCKCCCEDZ1VU674wIgghBotV8/u+MCDwkDPCCCED5KNki64wIgghBA33MbuuMCIIIQaLVfP7rjAg0MCgIiMPhCbuMA+Ebyc9H4ANs88gALFQFc7UTQ10nCAY4jcO1E0PQFcG1vAiBwIPht+Gz4a/hqgED0DvK91wv/+GJw+GPjDR8DeDD4RvLgTPhCbuMAIZPU0dDe0//R2zwhjhwj0NMB+kAwMcjPhyDOghDA33MbzwuBygDJcPsAkTDi4wDyAB8SHQN4MPhG8uBM+EJu4wAhk9TR0N7T/9HbPCGOHCPQ0wH6QDAxyM+HIM6CEL5KNkjPC4HKAMlw+wCRMOLjAPIAHw4dAE5wIJYg+EtvELmOFyD4S28RgCD0DvKy1wv/I7qUfzLbMeCk4xhfA3AEUCCCEAVDF2K64wIgghANfiezuuMCIIIQH/+rYrrjAiCCEDZ1VU664wIcGhQQA3ow+Eby4Ez4Qm7jACGT1NHQ3tP/0ds8IY4cI9DTAfpAMDHIz4cgzoIQtnVVTs8LgcoAyXD7AJEw4jDbPPIAHxEVArJwiPhMcLr4TX+6sfLoCiHbPPhscJMgwRGOFyD4S28RgCD0DvKy1wv/I7qUfzLbMeCk4xgw+EtvEMAJ+ExwurCTf/ht3vhLWMjL/wFvIiGkVSCAIPRDbwL4axMSAE5wIJYg+EpvELmOFyD4Sm8RgCD0DvKy1wv/I7qUfzLbMeCk4xhfA3AAFmFscmVhZHkgd29uA4Yw+Eby4Ez4Qm7jACGT1NHQ3tP/0ds8IY4iI9DTAfpAMDHIz4cgzoIQn/+rYs8LgQFvIgLLH/QAyXD7AJEw4jDbPPIAHxYVAFT4TfhM+Ev4SvhD+ELIy//LP8+DAW8iAssf9AABbyICyx/0AMoAygDJ7VQBHnBtbwJwIJMgwQeOgOhbMRcC/nB3cJYis1MSu7COQ1R2A/gl+EnIzss/y/9ZyMv/y//NyfkAgBGpCKQ1cCCVUwdvELmOFlMHbxGAIPQO8rLXC/8nupR/Mtsx4KTjGDCzM6ToiAK58ugUMFMSbyJSMFMSufKyVQLIy/9ZgCD0Q28CM/hKUxNvEYAg9A7ystcL/8gZGAAky/8BbyIhpFUggCD0Q28C+GqkAGRFcnJvciBnZW5lcmF0aW5nIHJhbmRvbSB0aWNrZXQgbnVtYmVycy4gTWF4IHJldHJ5LgNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghCNfiezzwuBygDJcPsAkTDi4wDyAB8bHQAE+E0DaDD4RvLgTPhCbuMA0ds8IY4cI9DTAfpAMDHIz4cgzoIQhUMXYs8LgcoAyXD7AJEw4uMA8gAfHh0AKO1E0NP/0z8x+ENYyMv/yz/Oye1UAAT4TABW7UTQ0//TP9MAMdMf9ARZbwIB0x/0BFlvAgHSANIA0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIyIAFHNvbCAwLjYyLjAAAA==";
