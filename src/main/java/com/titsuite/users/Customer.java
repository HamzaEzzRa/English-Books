package com.titsuite.users;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Date;

public class Customer extends User {

    private static final String[] subscriptions = { "BASIC", "PREMIUM" };

    private String subscription;

    public Customer() {}

    public Customer(long id, String email, String hashedPassword, String firstName, String lastName,
        String phoneNumber, Date birthDate, String city, String street, String subscription, String refreshToken,
        String verificationCode, int isActive, Date resendTimeout) {
        super(id, email, hashedPassword, firstName, lastName, phoneNumber, birthDate, city, street, refreshToken,
        verificationCode, isActive, resendTimeout);
        setSubscription(subscription);
    }

    public Customer(User user) {
        super(user.getId(), user.getEmail(), user.getHashedPassword(), user.getFirstName(), user.getLastName(),
            user.getPhoneNumber(), user.getBirthDate(), user.getCity(), user.getStreet(), user.getRefreshToken(),
            user.getVerificationCode(), user.getIsActive(), user.getResendTimeout());
    }

    public Customer(User user, String subscription) {
        this(user.getId(), user.getEmail(), user.getHashedPassword(), user.getFirstName(), user.getLastName(),
            user.getPhoneNumber(), user.getBirthDate(), user.getCity(), user.getStreet(), subscription,
            user.getRefreshToken(), user.getVerificationCode(), user.getIsActive(), user.getResendTimeout());
    }

    public String getSubscription() {
        if (this.subscription == null)
            this.subscription = subscriptions[0];

        return this.subscription;
    }

    public void setSubscription(String subscription) {
        for (String sub : subscriptions) {
            if (subscription.equals(sub)) {
                this.subscription = subscription;
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
        jsonObject.put("subscription", getSubscription());
        return jsonObject;
    }

}
