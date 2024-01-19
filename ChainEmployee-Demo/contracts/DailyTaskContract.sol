// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract DailyTaskContract {
    struct DailyTask {
        uint256 id;
        uint256 date; 
        string projectName;
        string description;
        string employeeName;
        string employeeLastName;
    }

    mapping(uint256 => DailyTask) public dailyTasks;

    uint256 public taskCount;

    mapping(string => uint256[]) private tasksByProject;

    function addDailyTask(string memory _projectName, string memory _description, string memory _employeeName, string memory _employeeLastName) public {
        taskCount++;
        dailyTasks[taskCount] = DailyTask(taskCount, block.timestamp, _projectName, _description, _employeeName, _employeeLastName);
        tasksByProject[_projectName].push(taskCount);
    }

    function getAllTasks() public view returns (DailyTask[] memory) {
        DailyTask[] memory tasks = new DailyTask[](taskCount);
        for (uint256 i = 0; i < taskCount; i++) {
            tasks[i] = dailyTasks[i];
        }
        return tasks;
    }

    function getTasksByEmployee(string memory _employeeName, string memory _employeeLastName) public view returns (DailyTask[] memory) {
        uint256 count = 0;
        for (uint256 i = 1; i <= taskCount; i++) {
            if (keccak256(abi.encodePacked(dailyTasks[i].employeeName)) == keccak256(abi.encodePacked(_employeeName)) &&
                keccak256(abi.encodePacked(dailyTasks[i].employeeLastName)) == keccak256(abi.encodePacked(_employeeLastName))) {
                count++;
            }
        }

        DailyTask[] memory tasks = new DailyTask[](count);
        uint256 index = 0;
        for (uint256 i = 1; i <= taskCount; i++) {
            if (keccak256(abi.encodePacked(dailyTasks[i].employeeName)) == keccak256(abi.encodePacked(_employeeName)) &&
                keccak256(abi.encodePacked(dailyTasks[i].employeeLastName)) == keccak256(abi.encodePacked(_employeeLastName))) {
                tasks[index] = dailyTasks[i];
                index++;
            }
        }

        return tasks;
    }

    function getTasksByProject(string memory _projectName) public view returns (DailyTask[] memory) {
        uint256[] storage taskIds = tasksByProject[_projectName];
        uint256 count = taskIds.length;

        DailyTask[] memory tasks = new DailyTask[](count);

        for (uint256 i = 0; i < count; i++) {
            tasks[i] = dailyTasks[taskIds[i]];
        }

        return tasks;
    }
}