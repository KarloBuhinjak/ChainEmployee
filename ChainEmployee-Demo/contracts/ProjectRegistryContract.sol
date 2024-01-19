// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ProjectRegistryContract {
    struct Project {
        string projectName;
        uint256 deploymentDate;
        
    }

    Project[] private projects;

    event DeployProject(string projectName);

    function deployProject(string memory projectName) public {
        Project memory newProject = Project({
            projectName: projectName,
            deploymentDate: block.timestamp
        });

        projects.push(newProject);
        emit DeployProject(projectName);
    }

    function getAllProjects() public view returns (Project[] memory) {
        return projects;
    }
}