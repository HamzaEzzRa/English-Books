package com.titsuite.offers;

import java.util.Date;

public class Offer{

    private int ID;
    private String description;
    private String city;
    private int minimumWage;

    private String status="UNPUBLISHED";
    private int refCustomer;
    private  String  startDay;




    public Offer(int ID, String description, String city, int minimumWage, String status, int refCustomer, String startDay) {
        this.ID = ID;
        this.description = description;
        this.city = city;
        this.minimumWage = minimumWage;
        this.status = status;
        this.refCustomer = refCustomer;
        this.startDay = startDay;
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

    public int getMinimumWage() {
        return minimumWage;
    }

    public String getStatus() {
        return status;
    }

    public int getRefCustomer() {
        return refCustomer;
    }

    public  String  getStartDay() {
        return startDay;
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

    public void setMinimumWage(int minimumWage) {
        this.minimumWage = minimumWage;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setRefCustomer(int refCustomer) {
        this.refCustomer = refCustomer;
    }

    public void setStartDay( String  startDay) {
        this.startDay = startDay;
    }
}
