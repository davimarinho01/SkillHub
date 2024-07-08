package com.example.skillhub.controller;

import com.example.skillhub.user.User;
import com.example.skillhub.user.UserRepository;
import com.example.skillhub.user.UserResponseDTO;
import com.example.skillhub.user.UserRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("SkillHub")
public class UserController {

    @Autowired
    private UserRepository repository;

    @PostMapping
    public void saveUser(@RequestBody UserRequestDTO data){
        User userData = new User(data);
        repository.save(userData);
        return;
    }

    @GetMapping
    public List<UserResponseDTO> getAll(){

        List<UserResponseDTO> userList = repository.findAll().stream().map(UserResponseDTO::new).toList();
        return userList;

    }

}
