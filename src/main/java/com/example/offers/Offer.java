package com.example.offers;

public class Offer{

    private int ID;
    private String description;
    private String city;
    private String startDay;
    private int refCustomer;
    private String status="UNPUBLISHED";

    public Offer(int ID, String description, String city, String startDay, int refCustomer) {
        this.ID = ID;
        this.description = description;
        this.city = city;
        this.startDay = startDay;
        this.refCustomer = refCustomer;
    }

    public int getID() {
        return ID;
    }

    public String getDescription() {
        return description;
    }

    public String getCity() {
        return city;
    }

    public String getStartDay() {
        return startDay;
    }

    public int getRefCustomer() {
        return refCustomer;
    }

    public String getStatus() {
        return status;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public void setRefCustomer(int refCustomer) {
        this.refCustomer = refCustomer;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
