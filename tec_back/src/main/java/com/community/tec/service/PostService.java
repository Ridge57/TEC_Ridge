package com.community.tec.service;

import com.community.tec.entity.Post;
import com.community.tec.util.FavorisParams;

import java.util.List;
import java.util.Set;
import java.util.UUID;

public interface PostService {

    List<Post> findAll();
    void savePost(Post post);

    List<Post> findAllByUser(String idUser);
    Set<UUID> findUserFavorisID(String idUser);

    List<Post> findUserFavorisPost(String idUser);

    void deleteById(String id);

}
