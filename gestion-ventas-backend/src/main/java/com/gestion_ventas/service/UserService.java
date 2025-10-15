package com.gestion_ventas.service;

import com.gestion_ventas.model.Login;
import com.gestion_ventas.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private LoginRepository loginRepository;

    public boolean validateUser(String usuario, String contra) {
        Optional<Login> login = loginRepository.findByUsuario(usuario);
        return login.isPresent() && login.get().getContra().equals(contra);
    }
}
