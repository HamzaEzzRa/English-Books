package com.example.offers;

import DAO.Factory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.sql.Connection;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Path("/users")
public class HelloResource {
    private Factory doaFactory;
    Connection connection=null;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<user> hello() {

        Statement statement = null;
        ResultSet resultSet = null;

        ArrayList<user> myusers=new ArrayList<user>();
        //step2 create  the connection object
        try {
           connection=doaFactory.getConnection();
            statement =connection.createStatement();



            resultSet=statement.executeQuery("SELECT * FROM USERS");


            while (resultSet.next()) {
                user temp=new user(resultSet.getString(1),resultSet.getString(2),resultSet.getString(3));
                myusers.add(temp);
                System.out.println(resultSet.getString(3));

            }

            statement.close();
            connection.close();
        } catch (SQLException | IOException throwables) {
            throwables.printStackTrace();
        }

        return  myusers;
    }



}