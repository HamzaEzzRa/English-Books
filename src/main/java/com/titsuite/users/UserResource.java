package com.titsuite.users;

import com.titsuite.dao.UserDAO;
import com.titsuite.exceptions.UserExistsException;
import com.titsuite.exceptions.UserNotFoundException;
import com.titsuite.filters.AuthenticationFilter;
import com.titsuite.managers.PasswordManager;
import com.titsuite.managers.TokenManager;
import com.titsuite.models.AuthCredentials;
import com.titsuite.utils.ResponseBuilder;
import org.jose4j.lang.JoseException;

import javax.annotation.security.DeclareRoles;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@DeclareRoles({ "customer", "freelancer", "staff" })
@Path("/users")
public class UserResource {

    @POST
    @PermitAll
    @Path("/register")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response register(AuthCredentials credentials) {
        UserDAO userDao = new UserDAO();

        try {
            User newUser = new User();
            newUser.setEmail(credentials.getEmail());
            newUser.setHashedPassword(PasswordManager.hashPassword(credentials.getPassword()));
            if (userDao.isCustomer(credentials.getRole()))
                userDao.createCustomer(new Customer(newUser));
            else if (userDao.isFreelancer(credentials.getRole()))
                userDao.createFreelancer(new Freelancer(newUser));
            else if (userDao.isStaff(credentials.getRole()))
                userDao.createStaff(new Staff(newUser));

            return ResponseBuilder.createResponse(Response.Status.OK, "User created successfully!");
        } catch (UserExistsException e) {
            return ResponseBuilder.createResponse(Response.Status.CONFLICT, e.getMessage());
        } catch (SQLException e) {
            return ResponseBuilder.createResponse(Response.Status.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @POST
    @PermitAll
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(AuthCredentials credentials) {
        UserDAO userDao = new UserDAO();
        User foundUser = new User();

        try {
            if (userDao.isCustomer(credentials.getRole()))
                foundUser = userDao.findCustomerByEmail(credentials.getEmail());
            else if (userDao.isFreelancer(credentials.getRole()))
                foundUser = userDao.findFreelancerByEmail(credentials.getEmail());
            else if (userDao.isStaff(credentials.getRole()))
                foundUser = userDao.findStaffByEmail(credentials.getEmail());

            if (!PasswordManager.validatePassword(credentials.getPassword(), foundUser.getHashedPassword()))
                return ResponseBuilder.createResponse(Response.Status.UNAUTHORIZED);

            String token = TokenManager.generateJWT(Long.toString(foundUser.getId()), credentials.getRole());

            Map<String, Object> claimsMap = new HashMap<>();
            claimsMap.put(AuthenticationFilter.AUTHORIZATION_PROPERTY, token);

            return ResponseBuilder.createResponse(Response.Status.OK, claimsMap);
        } catch (UserNotFoundException e) {
            return ResponseBuilder.createResponse(Response.Status.NOT_FOUND, e.getMessage());
        } catch (SQLException | JoseException e) {
            return ResponseBuilder.createResponse(Response.Status.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @GET
    @RolesAllowed({ "customer", "freelancer", "staff" })
    @Path("/refreshToken")
    @Produces(MediaType.APPLICATION_JSON)
    public Response refreshToken() {
        return ResponseBuilder.createResponse(Response.Status.OK);
    }

    @GET
    @RolesAllowed({ "staff" })
    @Path("{role}/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAllByRole(@PathParam("role") String role) {
        UserDAO userDao = new UserDAO();
        List<? extends User> userList;

        try {
            if (userDao.isCustomer(role)) {
                userList = userDao.findAllCustomers();
            }
            else if (userDao.isFreelancer(role))
                userList = userDao.findAllFreelancers();
            else if (userDao.isStaff(role))
                userList = userDao.findAllStaffs();
            else
                return ResponseBuilder.createResponse(Response.Status.BAD_REQUEST, "Invalid role: " + role);
        } catch (SQLException e) {
            return ResponseBuilder.createResponse(Response.Status.INTERNAL_SERVER_ERROR, e.getMessage());
        }

        return ResponseBuilder.createResponse(Response.Status.OK, userList);
    }

}
