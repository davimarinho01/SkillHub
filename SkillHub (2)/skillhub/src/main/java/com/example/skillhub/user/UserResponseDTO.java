package com.example.skillhub.user;

public record UserResponseDTO(Long id, String username, String password, String name, String skillname, String description, String level, String image) {
    public UserResponseDTO(User user) {
        this(user.getId(),user.getUsername(),user.getPassword(),user.getName(),user.getSkillname(),user.getDescription(),user.getLevel(),user.getImage());
    }
}
