package com.community.tec.service;

import com.community.tec.entity.User;
import com.community.tec.util.ConnexionPayload;
import com.community.tec.util.FavorisParams;

import java.util.List;
import java.util.UUID;

public interface UserService {

    void saveNewUser(User user);
    User updateUser(User user);
    List<User> findAll();
    User connexion(ConnexionPayload connexionPayload);

    List<UUID> toogleFavoris(FavorisParams favorisParams);
}
