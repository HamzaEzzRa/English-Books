package com.example.offers;
import DAO.Factory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Path("/offers")
public class OffersAPI {
    private Factory doaFactory;
    private Connection connection=null;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Offer> getAllOffers(){
        Statement statement = null;
        ResultSet resultSet = null;

        ArrayList<Offer> allOffers=new ArrayList<Offer>();
        //step2 create  the connection object
        try {
            connection=doaFactory.getConnection();
            statement =connection.createStatement();



            resultSet=statement.executeQuery("SELECT * FROM OFFERS");


            while (resultSet.next()) {
                Offer temp=new Offer(resultSet.getInt(1),resultSet.getString(2),resultSet.getString(3),resultSet.getInt(4),resultSet.getString(5),resultSet.getInt(6),resultSet.getString(7));
                allOffers.add(temp);
                System.out.println("ress"+ temp);

            }

            statement.close();
            connection.close();
        } catch (SQLException | IOException throwables) {
            throwables.printStackTrace();
        }
        return allOffers;
    };
    @Path("/city={ville}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Offer> getOfferByCity(  @PathParam("ville") String city){
        ArrayList<Offer> filteredOffersByCity=new ArrayList<Offer>();
        try {
            connection = doaFactory.getConnection();
            PreparedStatement stmt = connection.prepareStatement("select * from offers where city=(?)");
            stmt.setString(1,city);
            ResultSet resultSet=stmt.executeQuery();

            while(resultSet.next()){
                Offer data=new Offer(resultSet.getInt(1),resultSet.getString(2),resultSet.getString(3),resultSet.getInt(4),resultSet.getString(5),resultSet.getInt(6),resultSet.getString(7));
                filteredOffersByCity.add(data);
            }


        } catch (SQLException | IOException throwables) {
            throwables.printStackTrace();
        }

        return filteredOffersByCity;
    };
    @Path("/ref={id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Offer> getOfferById(@PathParam("id") int id){

        ArrayList<Offer> filteredOffersById=new ArrayList<Offer>();
        try {
            connection = doaFactory.getConnection();
            PreparedStatement statement2 = connection.prepareStatement("select * from offers where ID=(?)");
            statement2.setInt(1,id);
            ResultSet resultSet=statement2.executeQuery();

            while(resultSet.next()){
                Offer data=new Offer(resultSet.getInt(1),resultSet.getString(2),resultSet.getString(3),resultSet.getInt(4),resultSet.getString(5),resultSet.getInt(6),resultSet.getString(7));
                filteredOffersById.add(data);
            }


        } catch (SQLException | IOException throwables) {
            throwables.printStackTrace();
        }

        return filteredOffersById;

    }

}
