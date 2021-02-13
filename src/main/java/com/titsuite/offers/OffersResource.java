package com.titsuite.offers;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.titsuite.dao.ConnectionFactory;
import com.titsuite.filters.AuthenticationFilter;
import com.titsuite.managers.TokenManager;
import com.titsuite.users.Customer;
import com.titsuite.users.User;
import org.jose4j.jwt.consumer.InvalidJwtException;

import javax.annotation.security.DeclareRoles;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@DeclareRoles({ "customer", "freelancer", "staff" })
@Path("/offers")
public class OffersResource {
    private Connection connection=null;


    @POST
    @Path("/new")
    @PermitAll
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response createNewOffer(/*@HeaderParam(AuthenticationFilter.HEADER_PROPERTY_ID ) String id,*/ Offer offer){
         //int refCustomer= Integer.parseInt(id);


        Offer newOffer=new Offer( offer.getDescription(), offer.getCity(),offer.getMinimumWage(), offer.getStatus(), "3445", offer.getStartDay(), offer.getActivity());
        System.out.println(newOffer.getRefCustomer()+"   "+ newOffer.getStatus());
        try {


        connection= ConnectionFactory.getConnection();
        PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO OFFERS(DESCRIPTION, CITY, MINIMUMWAGE, STATUS, REFCUSTOMER, STARTDAY) VALUES(?,?,?,?,?,?,?)");
        preparedStatement.setString(1, newOffer.getDescription());
            preparedStatement.setString(2, newOffer.getCity());
            preparedStatement.setInt(3, newOffer.getMinimumWage());
            preparedStatement.setString(4, newOffer.getStatus());
            preparedStatement.setString(5, newOffer.getRefCustomer());
            preparedStatement.setString(6, newOffer.getStartDay());
            preparedStatement.setString(7, newOffer.getActivity());

            preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

           return Response.status(200)
                .entity("Your new offer has been created successfully ")
                .build();
    }



    @GET
    @PermitAll
    @Produces(MediaType.APPLICATION_JSON)
    public List<Offer> getAllOffers(){
        Statement statement = null;
        ResultSet resultSet = null;

        ArrayList<Offer> allOffers=new ArrayList<Offer>();
        //step2 create  the connection object
        try {
            connection= ConnectionFactory.getConnection();
            statement =connection.createStatement();



            resultSet=statement.executeQuery("SELECT * FROM OFFERS");


            while (resultSet.next()) {
                Offer temp=new Offer(resultSet.getInt(1),resultSet.getString(2),resultSet.getString(3),resultSet.getInt(4),resultSet.getString(5),resultSet.getString(6),resultSet.getString(7), resultSet.getString(8));
                allOffers.add(temp);


            }

            statement.close();
            connection.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return allOffers;
    };
    @Path("/city={ville}")
    @GET
    @PermitAll
    @Produces(MediaType.APPLICATION_JSON)
    public List<Offer> getOfferByCity(  @PathParam("ville") String city){
        ArrayList<Offer> filteredOffersByCity=new ArrayList<Offer>();
        try {
            connection = ConnectionFactory.getConnection();
            PreparedStatement stmt = connection.prepareStatement("select * from offers where city=(?)");
            stmt.setString(1,city);
            ResultSet resultSet=stmt.executeQuery();

            while(resultSet.next()){
                Offer data=new Offer(resultSet.getInt(1),resultSet.getString(2),resultSet.getString(3),resultSet.getInt(4),resultSet.getString(5),resultSet.getString(6),resultSet.getString(7), resultSet.getString(8));
                filteredOffersByCity.add(data);
            }


        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return filteredOffersByCity;
    };
    @Path("/ref={id}")
    @GET
    @PermitAll
    @Produces(MediaType.APPLICATION_JSON)
    public List<Offer> getOfferById(@PathParam("id") int id){

        ArrayList<Offer> filteredOffersById=new ArrayList<Offer>();
        try {
            connection = ConnectionFactory.getConnection();
            PreparedStatement statement2 = connection.prepareStatement("select * from offers where ID=(?)");
            statement2.setInt(1,id);
            ResultSet resultSet=statement2.executeQuery();

            while(resultSet.next()){
                Offer data=new Offer(resultSet.getInt(1),resultSet.getString(2),resultSet.getString(3),resultSet.getInt(4),resultSet.getString(5),resultSet.getString(6),resultSet.getString(7), resultSet.getString(8));
                filteredOffersById.add(data);
            }


        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return filteredOffersById;

    }

}
