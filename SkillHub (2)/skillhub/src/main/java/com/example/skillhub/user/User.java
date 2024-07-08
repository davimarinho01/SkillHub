package com.example.skillhub.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name="users")
@Entity(name= "users")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String name;
    private String skillname;
    private String description;
    private String level;
    private String image;

    public User(UserRequestDTO data) {
        this.username = data.username();
        this.password = data.password();
        this.name = data.name();
        this.skillname = data.skillname();
        this.description = data.description();
        this.level = data.level();
        this.image = data.image();
    }
}
