package com.community.tec.service;

import com.community.tec.dao.PostDAO;
import com.community.tec.dao.UserDAO;
import com.community.tec.entity.Post;
import com.community.tec.entity.User;
import com.community.tec.util.FavorisParams;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class PostServiceImpl implements PostService {

    private final PostDAO postDao;
    private final UserDAO userDAO;

    PostServiceImpl(PostDAO postDAO, UserDAO userDAO) {
        this.postDao = postDAO;
        this.userDAO = userDAO;
    }
    @Override
    public List<Post> findAll() {
        return postDao.findAll();
    }

    @Override
    public void savePost(Post post) {
        post.setDatePublication(new Date());
        postDao.save(post);
    }

    @Override
    public List<Post> findAllByUser(String idUser) {
        return postDao.findByOwner(UUID.fromString(idUser));
    }

    @Override
    public Set<UUID> findUserFavorisID(String idUser) {
        return userDAO.findById(UUID.fromString(idUser)).get().getPostsFavoris();
    }

    @Override
    public List<Post> findUserFavorisPost(String idUser) {
        return postDao.findAllById(findUserFavorisID(idUser));
    }

    @Override
    public void deleteById(String id) {
        postDao.deleteById(UUID.fromString(id));
    }
}
