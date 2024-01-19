// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract TeamChatContract {
    struct Message {
        string firstName;
        string lastName;
        string message;
    }

    Message[] private teamMessages;

    event MessageSent(string firstName, string lastName, string message);

    function sendMessage(string memory firstName, string memory lastName, string memory message) public {
        Message memory newMessage = Message({
            firstName: firstName,
            lastName: lastName,
            message: message
        });

        teamMessages.push(newMessage);
        emit MessageSent(firstName, lastName, message);
    }

    function getMessages() public view returns (Message[] memory) {
        return teamMessages;
    }
}