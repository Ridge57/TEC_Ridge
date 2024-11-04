package com.community.tec.service;

import com.community.tec.dao.UserDAO;
import com.community.tec.entity.User;
import com.community.tec.util.ConnexionPayload;
import com.community.tec.util.FavorisParams;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    private final UserDAO userDao;

    UserServiceImpl(UserDAO userDAO) {
        this.userDao = userDAO;
    }

    @Override
    public void saveNewUser(User user) {
        userDao.save(user);
    }

    @Override
    public User updateUser(User user) {
        return userDao.save(user);
    }

    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }

    @Override
    public User connexion(ConnexionPayload connexionPayload) {
        User user = userDao.findByEmail(connexionPayload.getEmail());
        if(Objects.isNull(user) || pwdAreDifferent(user.getPassword(), connexionPayload.getPassword())) {
            return null;
        }
        return user;
    }
    private boolean pwdAreDifferent(String str1, String str2) {
        return !str1.equals(str2);
    }

    @Override
    public List<UUID> toogleFavoris(FavorisParams favorisParams) {
        Optional<User> user = userDao.findById(UUID.fromString(favorisParams.getUserID()));
        if(user.isPresent()) {
            return addOrRemoveFavoris(user.get(),UUID.fromString(favorisParams.getPostID()));
        } else {
            throwException();
        }
        return null;
    }

    private List<UUID> addOrRemoveFavoris(User user, UUID postID) {
        Set<UUID> favoris = Objects.isNull(user.getPostsFavoris()) ?
                new HashSet<UUID>() :
                user.getPostsFavoris();
        if(favoris.add(postID) == false) {
            favoris.remove(postID);
        }
        user.setPostsFavoris(favoris);
        userDao.save(user);
        return favoris.stream().toList();
    }

    private void throwException() {
        throw new RuntimeException("Une erreur est survenue");
    }
}
