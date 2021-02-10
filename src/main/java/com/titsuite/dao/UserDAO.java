package com.titsuite.dao;

import com.titsuite.exceptions.UserExistsException;
import com.titsuite.exceptions.UserNotFoundException;
import com.titsuite.users.Customer;
import com.titsuite.users.Freelancer;
import com.titsuite.users.Staff;
import com.titsuite.users.User;
import com.titsuite.utils.DateMapper;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {

    private static final String CUSTOMER_ROLE = "customer";
    private static final String FREELANCER_ROLE = "freelancer";
    private static final String STAFF_ROLE = "staff";

    public boolean isCustomer(String role) { return role.equalsIgnoreCase(CUSTOMER_ROLE); }

    public boolean isFreelancer(String role) { return role.equalsIgnoreCase(FREELANCER_ROLE); }

    public boolean isStaff(String role) { return role.equalsIgnoreCase(STAFF_ROLE); }

    private <T extends User> void createQuery(String role, T user, Object... args) throws UserExistsException,
        SQLException {
        String tableName = null;
        String insertQuery = null;
        if (isCustomer(role)) {
            tableName = "CUSTOMER";
            insertQuery = "INSERT INTO " + tableName + " (EMAIL, HASHED_PASSWORD, FIRST_NAME, LAST_NAME, " +
                "PHONE_NUMBER, BIRTH_DATE, CITY, STREET, SUBSCRIPTION) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        }
        else if (isFreelancer(role)) {
            tableName = "FREELANCER";
            insertQuery = "INSERT INTO " + tableName + " (EMAIL, HASHED_PASSWORD, FIRST_NAME, LAST_NAME, " +
            "PHONE_NUMBER, BIRTH_DATE, CITY, STREET, ACTIVITY, MINIMUM_WAGE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        }
        else if (isStaff(role)) {
            tableName = "STAFF";
            insertQuery = "INSERT INTO " + tableName + " (EMAIL, HASHED_PASSWORD, FIRST_NAME, LAST_NAME, " +
                "PHONE_NUMBER, BIRTH_DATE, CITY, STREET, ROLE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        }

        Connection connection = ConnectionFactory.getConnection();
        Statement statement = connection.createStatement();
        final String searchQuery = "SELECT * FROM " + tableName + " WHERE EMAIL = '" + user.getEmail() + "'";

        if (statement.executeQuery(searchQuery).next()) {
            connection.close();
            throw new UserExistsException(user.getEmail());
        }

        PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
        preparedStatement.setString(1, user.getEmail());
        preparedStatement.setString(2, user.getHashedPassword());
        preparedStatement.setString(3, user.getFirstName());
        preparedStatement.setString(4, user.getLastName());
        preparedStatement.setString(5, user.getPhoneNumber());
        preparedStatement.setDate(6, DateMapper.javaToSqlDate(user.getBirthDate()));
        preparedStatement.setString(7, user.getCity());
        preparedStatement.setString(8, user.getStreet());

        for (int i = 0; i < args.length; i++) {
            if (args[i] instanceof String)
                preparedStatement.setString(i+9, (String) args[i]);
            else if (args[i] instanceof Float)
                preparedStatement.setFloat(i+9, (Float) args[i]);
            else if (args[i] == null)
                preparedStatement.setString(i+9, null);
        }

        preparedStatement.executeUpdate();

        connection.close();
    }

    public void createCustomer(Customer customer) throws UserExistsException, SQLException {
        createQuery(CUSTOMER_ROLE, customer, customer.getSubscription());
    }

    public void createFreelancer(Freelancer freelancer) throws UserExistsException, SQLException {
        createQuery(FREELANCER_ROLE, freelancer, freelancer.getActivity(), freelancer.getMinimumWage());
    }

    public void createStaff(Staff staff) throws UserExistsException, SQLException {
        createQuery(STAFF_ROLE, staff, staff.getRole());
    }

    private List<? extends User> findQuery(String role, String findBy, String arg) throws UserNotFoundException,
        SQLException {
        List<User> userList = new ArrayList<>();

        Connection connection = ConnectionFactory.getConnection();
        Statement statement = connection.createStatement();
        String searchQuery = "SELECT * FROM " + role;
        if (findBy != null && arg != null)
            searchQuery += " WHERE " + findBy + " = '" + arg + "'";

        ResultSet resultSet = statement.executeQuery(searchQuery);

        while (resultSet.next()) {
            User foundUser = null;
            if (isCustomer(role)) {
                foundUser = new Customer(
                    resultSet.getLong(1), resultSet.getString(2),
                    resultSet.getString(3), resultSet.getString(4),
                    resultSet.getString(5), resultSet.getString(6),
                    DateMapper.sqlToJavaDate(resultSet.getDate(7)),
                    resultSet.getString(8), resultSet.getString(9),
                    resultSet.getString(10)
                );
            }
            else if (isFreelancer(role)) {
                foundUser = new Freelancer(
                    resultSet.getLong(1), resultSet.getString(2),
                    resultSet.getString(3), resultSet.getString(4),
                    resultSet.getString(5), resultSet.getString(6),
                    DateMapper.sqlToJavaDate(resultSet.getDate(7)),
                    resultSet.getString(8), resultSet.getString(9),
                    resultSet.getString(10), resultSet.getFloat(11)
                );
            }
            else if (isStaff(role)) {
                foundUser = new Staff(
                    resultSet.getLong(1), resultSet.getString(2),
                    resultSet.getString(3), resultSet.getString(4),
                    resultSet.getString(5), resultSet.getString(6),
                    DateMapper.sqlToJavaDate(resultSet.getDate(7)),
                    resultSet.getString(8), resultSet.getString(9),
                    resultSet.getString(10)
                );
            }
            userList.add(foundUser);
        }

        connection.close();

        if (findBy != null && arg != null && userList.size() == 0)
            throw new UserNotFoundException();

        return userList;
    }

    public Customer findCustomerById(long id) throws UserNotFoundException, SQLException {
        return (Customer) findQuery(CUSTOMER_ROLE, "ID", Long.toString(id)).get(0);
    }

    public Customer findCustomerByEmail(String email) throws UserNotFoundException,
        SQLException {
        return (Customer) findQuery(CUSTOMER_ROLE, "EMAIL", email).get(0);
    }

    public List<Customer> findAllCustomers() throws UserNotFoundException, SQLException {
        return (List<Customer>) findQuery(CUSTOMER_ROLE, null, null);
    }

    public Freelancer findFreelancerById(long id) throws UserNotFoundException, SQLException {
        return (Freelancer) findQuery(FREELANCER_ROLE, "ID", Long.toString(id)).get(0);
    }

    public Freelancer findFreelancerByEmail(String email) throws UserNotFoundException,
        SQLException {
        return (Freelancer) findQuery(FREELANCER_ROLE, "EMAIL", email).get(0);
    }

    public List<Freelancer> findAllFreelancers() throws UserNotFoundException, SQLException {
        return (List<Freelancer>) findQuery(FREELANCER_ROLE, null, null);
    }

    public Staff findStaffById(long id) throws UserNotFoundException, SQLException {
        return (Staff) findQuery(STAFF_ROLE, "ID", Long.toString(id)).get(0);
    }

    public Staff findStaffByEmail(String email) throws UserNotFoundException, SQLException {
        return (Staff) findQuery(STAFF_ROLE, "EMAIL", email).get(0);
    }

    public List<Staff> findAllStaffs() throws UserNotFoundException, SQLException {
        return (List<Staff>) findQuery(STAFF_ROLE, null, null);
    }

}
