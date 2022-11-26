export const MINESWEEPER_ADDRESS =
  "0:49e33abbd665bd4f5f8354ac770b7d0234bef237d583d20efeec70314fd18c3c";
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
      name: "constructor",
      inputs: [],
      outputs: [],
    },
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
  "te6ccgECJAEABV4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBwQjAQAFA/7tRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4ZgwjXGCD5AQHTAAGU0/8DAZMC+ELi+RDyqJXTAAHyeuLTPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds8CwgGAATyPANS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwgIAgCKCCCEDZ1VU674wIgghBotV8/u+MCDwkDPCCCED5KNki64wIgghBA33MbuuMCIIIQaLVfP7rjAg0MCgMmMPhCbuMA+Ebyc9F32zww2zzyAAsWFQFc7UTQ10nCAY4jcO1E0PQFcG1vAiBwIPht+Gz4a/hqgED0DvK91wv/+GJw+GPjDR8DeDD4RvLgTPhCbuMAIZPU0dDe0//R2zwhjhwj0NMB+kAwMcjPhyDOghDA33MbzwuBygDJcPsAkTDi4wDyAB8SHQN4MPhG8uBM+EJu4wAhk9TR0N7T/9HbPCGOHCPQ0wH6QDAxyM+HIM6CEL5KNkjPC4HKAMlw+wCRMOLjAPIAHw4dAE5wIJYg+EtvELmOFyD4S28RgCD0DvKy1wv/I7qUfzLbMeCk4xhfA3AEUCCCEAVDF2K64wIgghANfiezuuMCIIIQH/+rYrrjAiCCEDZ1VU664wIcGhQQA3ow+Eby4Ez4Qm7jACGT1NHQ3tP/0ds8IY4cI9DTAfpAMDHIz4cgzoIQtnVVTs8LgcoAyXD7AJEw4jDbPPIAHxEVArZw+ACI+ExwuvhNf7qx8ugKIds8+GxwkyDBEY4XIPhLbxGAIPQO8rLXC/8jupR/Mtsx4KTjGDD4S28QwAn4THC6sJN/+G3e+EtYyMv/AW8iIaRVIIAg9ENvAvhrExIATnAgliD4Sm8QuY4XIPhKbxGAIPQO8rLXC/8jupR/Mtsx4KTjGF8DcAAWYWxyZWFkeSB3b24DhjD4RvLgTPhCbuMAIZPU0dDe0//R2zwhjiIj0NMB+kAwMcjPhyDOghCf/6tizwuBAW8iAssf9ADJcPsAkTDiMNs88gAfFhUAVPhN+Ez4S/hK+EP4QsjL/8s/z4MBbyICyx/0AAFvIgLLH/QAygDKAMntVAEecG1vAnAgkyDBB46A6FsxFwL+cHdwliKzUxK7sI5DVHYD+CX4ScjOyz/L/1nIy//L/83J+QCAEakIpDVwIJVTB28QuY4WUwdvEYAg9A7ystcL/ye6lH8y2zHgpOMYMLMzpOiIArny6BQwUxJvIlIwUxK58rJVAsjL/1mAIPRDbwIz+EpTE28RgCD0DvKy1wv/yBkYACTL/wFvIiGkVSCAIPRDbwL4aqQAZEVycm9yIGdlbmVyYXRpbmcgcmFuZG9tIHRpY2tldCBudW1iZXJzLiBNYXggcmV0cnkuA2gw+Eby4Ez4Qm7jANHbPCGOHCPQ0wH6QDAxyM+HIM6CEI1+J7PPC4HKAMlw+wCRMOLjAPIAHxsdAAT4TQNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghCFQxdizwuBygDJcPsAkTDi4wDyAB8eHQAo7UTQ0//TPzH4Q1jIy//LP87J7VQABPhMAFbtRNDT/9M/0wAx0x/0BFlvAgHTH/QEWW8CAdIA0gDR+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEjIgAUc29sIDAuNjIuMAAA";
