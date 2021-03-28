package com.ssafy.authsvr.security;

import com.ssafy.authsvr.entity.User;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Getter
@Setter
public class UserPrincipal implements OAuth2User, UserDetails {
    private ObjectId id;
    private String name;
    private String email;
    private String password;

    private List<Integer> blogList;
    private List<Integer> youtubeList;
    private List<Integer> jobList;
    private List<Integer> categoryList;

    private Collection<? extends GrantedAuthority> authorities;
    private Map<String, Object> attributes;

    public UserPrincipal(ObjectId id, String email, String password, Collection<? extends GrantedAuthority> authorities){
//                         ,List<Integer> blogList, List<Integer> youtubeList, List<Integer> jobList) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
//        this.blogList = blogList;
//        this.youtubeList = youtubeList;
//        this.jobList = jobList;
    }

    public UserPrincipal(ObjectId id, String name, String email, String password, Collection<? extends GrantedAuthority> authorities
                         ,List<Integer> blogList, List<Integer> youtubeList, List<Integer> jobList) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.blogList = blogList;
        this.youtubeList = youtubeList;
        this.jobList = jobList;
    }

    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities = Collections.
                singletonList(new SimpleGrantedAuthority("ROLE_USER"));
        return new UserPrincipal(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPassword(),
                authorities,
                user.getBlogList(),
                user.getYoutubeList(),
                user.getJobList()
        );
    }

    public static UserPrincipal create(User user, Map<String, Object> attributes) {
        UserPrincipal userPrincipal = UserPrincipal.create(user);
        userPrincipal.setAttributes(attributes);
        return userPrincipal;
    }

    public ObjectId getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    @Override
    public String getName() {
        return String.valueOf(id);
    }
}