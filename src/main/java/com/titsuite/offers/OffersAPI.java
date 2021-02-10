package com.titsuite.offers;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/offers")
public class OffersAPI {


    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getAllOffers(){
      return "all";
    };
    @Path("/city={ville}")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getOfferByCity(  @PathParam("ville") String city){
      return city;
    };
    @Path("/id={id}")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getOfferById(  @PathParam("id") String id){
     return id;
    }

}
