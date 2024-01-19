const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_projectName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_employeeName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_employeeLastName",
        type: "string",
      },
    ],
    name: "addDailyTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dailyTasks",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "projectName",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "employeeName",
        type: "string",
      },
      {
        internalType: "string",
        name: "employeeLastName",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTasks",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "projectName",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "employeeName",
            type: "string",
          },
          {
            internalType: "string",
            name: "employeeLastName",
            type: "string",
          },
        ],
        internalType: "struct DailyTaskContract.DailyTask[]",
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
        name: "_employeeName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_employeeLastName",
        type: "string",
      },
    ],
    name: "getTasksByEmployee",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "projectName",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "employeeName",
            type: "string",
          },
          {
            internalType: "string",
            name: "employeeLastName",
            type: "string",
          },
        ],
        internalType: "struct DailyTaskContract.DailyTask[]",
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
        name: "_projectName",
        type: "string",
      },
    ],
    name: "getTasksByProject",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "projectName",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "employeeName",
            type: "string",
          },
          {
            internalType: "string",
            name: "employeeLastName",
            type: "string",
          },
        ],
        internalType: "struct DailyTaskContract.DailyTask[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taskCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
