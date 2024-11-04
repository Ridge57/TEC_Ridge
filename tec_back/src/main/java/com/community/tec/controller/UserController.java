package com.community.tec.controller;

import com.community.tec.entity.User;
import com.community.tec.service.UserService;
import com.community.tec.util.ConnexionPayload;
import com.community.tec.util.FavorisParams;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;

    UserController(UserService userService) {
        this.userService = userService;
    }
    @RequestMapping(value="/users", method= RequestMethod.GET)
    public List<User> findAll() {
        return userService.findAll();
    }

    @RequestMapping(value="/", method= RequestMethod.GET)
    public String start() {
        return "app is running";
    }

    @RequestMapping(value="/user", method= RequestMethod.POST)
    public void save(@RequestBody User user) {
        userService.saveNewUser(user);
    }

    @RequestMapping(value = "/toogleFavoris", method = RequestMethod.POST)
    public List<UUID> toogleFavoris(@RequestBody FavorisParams favorisParams) {
       return userService.toogleFavoris(favorisParams);
    }
    @RequestMapping(value="/connexion", method= RequestMethod.POST)
    public User connexion(@RequestBody ConnexionPayload connexionPayload) {
        return userService.connexion(connexionPayload);
    }
}
