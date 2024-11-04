package com.community.tec.controller;

import com.community.tec.entity.Post;
import com.community.tec.service.PostService;
import com.community.tec.util.FavorisParams;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

    private final PostService postService;

    PostController(PostService postService) {
        this.postService = postService;
    }

    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    List<Post> findAll() {
        return postService.findAll();
    }

    @RequestMapping(value = "/post", method = RequestMethod.POST)
    void save(@RequestBody Post post) {
        postService.savePost(post);
    }

    @RequestMapping(value = "/users/{idUser}/posts", method = RequestMethod.GET)
    List<Post> findAllByUser(@PathVariable String idUser) {
        return postService.findAllByUser(idUser);
    }

    @RequestMapping(value = "/getFavorisIdsByUser/{idUser}", method = RequestMethod.GET)
    Set<UUID> findUserFavorisIDsList(@PathVariable String idUser) {
        return postService.findUserFavorisID(idUser);
    }

    @RequestMapping(value = "/getFavorisPostsByUser/{idUser}", method = RequestMethod.GET)
    List<Post> findUserFavorisPosts(@PathVariable String idUser) {
        return postService.findUserFavorisPost(idUser);
    }

    @RequestMapping(value = "/posts/{id}", method = RequestMethod.DELETE)
    void deleteByID(@PathVariable String id) {
        postService.deleteById(id);
    }
}
