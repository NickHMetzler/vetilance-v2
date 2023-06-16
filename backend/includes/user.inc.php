<?php

// This file contains functions related to user management

// Include the database connection configuration
require_once 'db_config.inc.php';

// Function to create a new user
function createUser($username, $password)
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
    
    // Bind parameters
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    
    // Execute the statement
    $stmt->execute();
    
    // Return true if the user creation was successful, false otherwise
    return true;
}

// Function to authenticate a user
function authenticateUser($username, $password)
{

    // Create a new PDO instance using the connection information
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    // Prepare the SQL statement
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
    
    // Bind parameters
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    
    // Execute the statement
    $stmt->execute();
    
    // Fetch the row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Return true if the user is authenticated, false otherwise
    return ($row !== false);
}

// Function to get user information
function getUserInfo($username)
{

    // Create a new PDO instance using the connection information
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
        // Create a new PDO instance
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
        // Prepare the SQL statement
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username");
        
        // Bind parameters
        $stmt->bindParam(':username', $username);
        
        // Execute the statement
        $stmt->execute();
        
        // Fetch the row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Return the user information as an associative array
        return $row;
    
}

?>
