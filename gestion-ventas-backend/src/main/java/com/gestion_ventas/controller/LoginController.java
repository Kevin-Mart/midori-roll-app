package com.gestion_ventas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com. gestion_ventas.service.UserService;

@CrossOrigin(origins = "http://localhost:5173") // tu frontend React
@RestController
@RequestMapping("/api/auth")
public class LoginController {

    @Autowired
    private UserService userService;

     static class LoginRequest {
        public String usuario;
        public String contra;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        boolean valid = userService.validateUser(request.usuario, request.contra);
        if (valid) {
            return "OK";
        } else {
            return "ERROR";
        }
    }

}
