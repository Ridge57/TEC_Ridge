package com.community.tec.util;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Builder
@Data
public class FavorisParams {
    private String userID;
    private String postID;
}
