package com.titsuite.models;

public class AuthCredentials {

    private String email;
    private String password;
    private String role;

    public AuthCredentials() {}

    public AuthCredentials(String email, String password, String role) {
        setEmail(email);
        setPassword(password);
        setRole(role);
    }

    public String getEmail() { return this.email; }

    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public String getRole() { return role; }

    public void setRole(String role) { this.role = role; }

    @Override
    public String toString() {
        return "AuthCredentials [email=" + getEmail() + ", role=" + getRole() +
            ", password=" + getPassword() + "]";
    }

}
