package com.titsuite.jobs;


import javax.annotation.security.DeclareRoles;
import javax.annotation.security.PermitAll;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@DeclareRoles({ "customer", "freelancer", "staff" })
@Path("/jobs")
public class JobsResource {


    @POST
    @Path("/all")
    @PermitAll
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response getAllJobs(){

        return Response.status(200).entity("success").build();
    }
}
