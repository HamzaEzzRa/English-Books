package com.titsuite.models;

public class AuthCredentials {

    private String email;
    private String password;
    private String role;
    private String address;
    private String city;
    private String phoneNumber;

    public AuthCredentials() {}

    public AuthCredentials(String email, String password, String role) {
        setEmail(email);
        setPassword(password);
        setRole(role);
    }

    public AuthCredentials(String email, String password, String role, String address, String city,
        String phoneNumber) {
        setEmail(email);
        setPassword(password);
        setRole(role);
        setAddress(address);
        setCity(city);
        setPhoneNumber(phoneNumber);
    }

    public String getEmail() { return this.email; }

    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public String getRole() { return role; }

    public void setRole(String role) { this.role = role; }

    public String getAddress() { return this.address; }

    public void setAddress(String address) { this.address = address; }

    public String getCity() { return this.city; }

    public void setCity(String city) { this.city = city; }

    public String getPhoneNumber() { return this.phoneNumber; }

    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

}
