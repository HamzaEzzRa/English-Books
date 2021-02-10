package com.titsuite.users;

import com.titsuite.utils.JsonSerializable;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Date;

public class User implements JsonSerializable {

    protected long id;
    protected String email;
    protected String hashedPassword;
    protected String firstName;
    protected String lastName;
    protected String phoneNumber;
    protected Date birthDate;
    protected String city;
    protected String street;

    public User() {}

    public User(long id, String email, String hashedPassword, String firstName, String lastName,
        String phoneNumber, Date birthDate, String city, String street) {
        this.setId(id);
        this.setEmail(email);
        this.setHashedPassword(hashedPassword);
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setPhoneNumber(phoneNumber);
        this.setBirthDate(birthDate);
        this.setCity(city);
        this.setStreet(street);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) { this.id = id; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public String getFirstName() { return this.firstName; }

    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return this.lastName; }

    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getCity() { return this.city; }

    public void setCity(String city) { this.city = city; }

    public String getStreet() { return this.street; }

    public void setStreet(String street) { this.street = street; }

    @Override
    public JSONObject toJson() throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("id", getId());
        jsonObject.put("email", getEmail());
        jsonObject.put("firstName", getFirstName());
        jsonObject.put("lastName", getLastName());
        jsonObject.put("phoneNumber", getPhoneNumber());
        jsonObject.put("city", getCity());
        jsonObject.put("street", getStreet());
        return jsonObject;
    }

}
