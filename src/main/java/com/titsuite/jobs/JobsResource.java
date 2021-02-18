package com.titsuite.jobs;


import com.titsuite.filters.AuthenticationFilter;

import javax.annotation.security.DeclareRoles;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@DeclareRoles({ "customer", "freelancer", "staff" })
@Path("/myjobs")
public class JobsResource {


    @GET
    @Path("/all")

   @RolesAllowed("freelancer")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Job> getAllJobs( @HeaderParam(AuthenticationFilter.HEADER_PROPERTY_ID) String id ){  //needs to return details about the offer, name of customer, date, description
        ArrayList<Job> myjobs=new ArrayList<Job>();




        return myjobs;
    }
}
