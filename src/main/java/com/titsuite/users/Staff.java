package com.titsuite.users;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Date;

public class Staff extends User {

    private static final String[] staffRoles = { "CUSTOMER_SERVICE", "ADMINISTRATOR" };

    private String role;

    public Staff() {}

    public Staff(long id, String email, String hashedPassword, String firstName, String lastName,
        String phoneNumber, Date birthDate, String city, String street, String role) {
        super(id, email, hashedPassword, firstName, lastName, phoneNumber, birthDate, city, street);
        setRole(role);
    }

    public Staff(User user) {
        setId(user.getId());
        setEmail(user.getEmail());
        setHashedPassword(user.getHashedPassword());
        setFirstName(user.getFirstName());
        setLastName(user.getLastName());
        setPhoneNumber(user.getPhoneNumber());
        setBirthDate(user.getBirthDate());
        setCity(user.getCity());
        setStreet(user.getStreet());
    }

    public Staff(User user, String role) {
        this(user.getId(), user.getEmail(), user.getHashedPassword(), user.getFirstName(), user.getLastName(),
            user.getPhoneNumber(), user.getBirthDate(), user.getCity(), user.getStreet(), role);
    }

    public String getRole() {
        if (this.role == null)
            role = staffRoles[0];

        return this.role;
    }

    public void setRole(String role) {
        for (String staffRole : staffRoles) {
            if (role.equals(staffRole)) {
                this.role = role;
                return;
            }
        }
    }

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
        jsonObject.put("role", getRole());
        return jsonObject;
    }

}
