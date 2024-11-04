package com.community.tec.dao;

import com.community.tec.entity.Post;
import com.community.tec.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PostDAO extends JpaRepository<Post, UUID> {

    List<Post> findByOwner(UUID user);
}
