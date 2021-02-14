package com.titsuite.users;

import java.util.Date;

public class Diploma {

    private long id;
    private String name;
    private Date date;
    private String field;
    private long freelancerRef;

    public Diploma(long id, String name, Date date, String field, long freelancerRef) {
        setId(id);
        setName(name);
        setDate(date);
        setField(field);
        setFreelancerRef(freelancerRef);
    }

    public long getId() { return this.id; }
    
    public void setId(long id) { this.id = id; }
    
    public String getName() { return this.name; }

    public void setName(String name) { this.name = name; }

    public Date getDate() { return this.date; }

    public void setDate(Date date) { this.date = date; }

    public String getField() { return this.field; }

    public void setField(String field) { this.field = field; }

    public long getFreelancerRef() { return this.freelancerRef; }

    public void setFreelancerRef(long freelancerRef) { this.freelancerRef = freelancerRef; }

}
