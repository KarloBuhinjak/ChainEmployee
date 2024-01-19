const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "projectName",
        type: "string",
      },
    ],
    name: "DeployProject",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "projectName",
        type: "string",
      },
    ],
    name: "deployProject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProjects",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "projectName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "deploymentDate",
            type: "uint256",
          },
        ],
        internalType: "struct ProjectRegistryContract.Project[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
