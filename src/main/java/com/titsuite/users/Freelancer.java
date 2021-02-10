package com.titsuite.users;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Date;

public class Freelancer extends User {

    private String activity;
    private float minimumWage;

    public Freelancer() {}

    public Freelancer(long id, String email, String hashedPassword, String firstName, String lastName,
        String phoneNumber, Date birthDate, String city, String street, String activity, float minimumWage) {
        super(id, email, hashedPassword, firstName, lastName, phoneNumber, birthDate, city, street);
        setActivity(activity);
        setMinimumWage(minimumWage);
    }

    public Freelancer(User user) {
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

    public Freelancer(User user, String activity, float minimumWage) {
        this(user.getId(), user.getEmail(), user.getHashedPassword(), user.getFirstName(), user.getLastName(),
            user.getPhoneNumber(), user.getBirthDate(), user.getCity(), user.getStreet(), activity, minimumWage);
    }

    public float getMinimumWage() { return this.minimumWage; }

    public void setMinimumWage(float minimumWage) { this.minimumWage = minimumWage; }

    public String getActivity() { return this.activity; }

    public void setActivity(String activity) { this.activity = activity; }

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
        jsonObject.put("activity", getActivity());
        jsonObject.put("minimumWage", getMinimumWage());
        return jsonObject;
    }

}
