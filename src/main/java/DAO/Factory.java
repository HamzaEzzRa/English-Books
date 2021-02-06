package DAO;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Factory {


    private static String url = "jdbc:oracle:thin:@localhost:1521:ORCLCDB";
    private static String nomUtilisateur = "Prince";
    private static String motDePasse = "Prince";



    public static Connection getConnection() throws IOException, SQLException {
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        return DriverManager.getConnection(url, nomUtilisateur, motDePasse);


    }

}