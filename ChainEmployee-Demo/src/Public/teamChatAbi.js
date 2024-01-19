const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    inputs: [],
    name: "getMessages",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "firstName",
            type: "string",
          },
          {
            internalType: "string",
            name: "lastName",
            type: "string",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        internalType: "struct TeamChatContract.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
