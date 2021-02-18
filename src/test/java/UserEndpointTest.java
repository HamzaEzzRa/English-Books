/*import com.titsuite.app.ServerApplication;
import com.titsuite.dao.ConnectionFactory;
import com.titsuite.dao.UserDAO;
import com.titsuite.exceptions.UserExistsException;
import com.titsuite.exceptions.UserNotFoundException;
import com.titsuite.filters.AuthenticationFilter;
import com.titsuite.managers.PasswordManager;
import com.titsuite.managers.TokenManager;
import com.titsuite.models.AuthCredentials;
import com.titsuite.users.*;
import com.titsuite.utils.*;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.container.test.api.RunAsClient;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.arquillian.junit.InSequence;
import org.jboss.arquillian.test.api.ArquillianResource;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.jboss.shrinkwrap.resolver.api.maven.Maven;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.File;
import java.net.URI;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(Arquillian.class)
@RunAsClient
public class UserEndpointTest {

    private static final String TEST_EMAIL = "hamzavitsh@gmail.com";
    private static final String TEST_PASSWORD = "Titsuite123456";
    private static final String TEST_CITY = "Casablanca";
    private static final String TEST_ADDRESS = "Sidi Maarouf Lot El Haddioui";
    private static final String TEST_PHONE_NUMBER = "212679223766";
    private static final String CUSTOMER_ROLE = "customer";
    private static final String FREELANCER_ROLE = "freelancer";
    private static final String STAFF_ROLE = "staff";

    private WebTarget userTarget;
    private String jsonWebToken;

    @ArquillianResource
    private URI baseURL;

    @Deployment(testable = false)
    public static WebArchive createDeployment() {

        File[] files = Maven.resolver().loadPomFromFile("pom.xml")
            .importRuntimeDependencies().resolve().withTransitivity().asFile();

        return ShrinkWrap.create(WebArchive.class)
            .addClasses(User.class, Customer.class, Freelancer.class, Staff.class, UserResource.class)
            .addClasses(Mailer.class, RandomStringGenerator.class, ResponseBuilder.class, DateMapper.class)
            .addClasses(UserDAO.class, ConnectionFactory.class, PasswordManager.class, TokenManager.class)
            .addClasses(JsonSerializable.class, DebugMapper.class, AuthCredentials.class, AuthenticationFilter.class)
            .addClasses(ServerApplication.class, UserExistsException.class, UserNotFoundException.class)
            //.addAsResource("META-INF/persistence-test.xml", "META-INF/persistence.xml")
            //.addAsWebInfResource(EmptyAsset.INSTANCE, "beans.xml")
            .addAsLibraries(files);
    }

    @Before
    public void initWebTarget() {
        Client client = ClientBuilder.newClient();
        userTarget = client.target(baseURL).path("api/users");
    }

    @Test
    public void shouldFailLogin() {
        AuthCredentials credentials = new AuthCredentials();
        credentials.setEmail("dummyEmail@dummyDomain.com");
        credentials.setPassword("dummyPassword");
        credentials.setRole(CUSTOMER_ROLE);
        credentials.setAddress(TEST_ADDRESS);
        credentials.setCity(TEST_CITY);
        credentials.setPhoneNumber(TEST_PHONE_NUMBER);

        Response response = userTarget.path("/login").request(MediaType.APPLICATION_JSON).post(
            Entity.entity(credentials, MediaType.APPLICATION_JSON)
        );

        assertEquals(401, response.getStatus());
    }

    @Test
    @InSequence(1)
    public void shouldCreateCustomer() {
        AuthCredentials credentials = new AuthCredentials();
        credentials.setEmail(TEST_EMAIL);
        credentials.setPassword(TEST_PASSWORD);
        credentials.setRole(CUSTOMER_ROLE);
        credentials.setAddress(TEST_ADDRESS);
        credentials.setCity(TEST_CITY);
        credentials.setPhoneNumber(TEST_PHONE_NUMBER);

        Response response = userTarget.path("/register").request(MediaType.APPLICATION_JSON).post(
            Entity.entity(credentials, MediaType.APPLICATION_JSON)
        );

        assertEquals(201, response.getStatus());
    }

    @Test
    @InSequence(2)
    public void shouldCreateFreelancer() {
        AuthCredentials credentials = new AuthCredentials();
        credentials.setEmail(TEST_EMAIL);
        credentials.setPassword(TEST_PASSWORD);
        credentials.setRole(FREELANCER_ROLE);
        credentials.setAddress(TEST_ADDRESS);
        credentials.setCity(TEST_CITY);
        credentials.setPhoneNumber(TEST_PHONE_NUMBER);

        Response response = userTarget.path("/register").request(MediaType.APPLICATION_JSON).post(
            Entity.entity(credentials, MediaType.APPLICATION_JSON)
        );

        assertEquals(201, response.getStatus());
    }

    @Test
    @InSequence(3)
    public void shouldCreateStaff() {
        AuthCredentials credentials = new AuthCredentials();
        credentials.setEmail(TEST_EMAIL);
        credentials.setPassword(TEST_PASSWORD);
        credentials.setRole(STAFF_ROLE);
        credentials.setAddress(TEST_ADDRESS);
        credentials.setCity(TEST_CITY);
        credentials.setPhoneNumber(TEST_PHONE_NUMBER);

        Response response = userTarget.path("/register").request(MediaType.APPLICATION_JSON).post(
            Entity.entity(credentials, MediaType.APPLICATION_JSON)
        );

        assertEquals(201, response.getStatus());
    }

    @Test
    @InSequence(4)
    public void shouldActivateAccount() {

    }

    @Test
    @InSequence(5)
    public void shouldLogin() {
        AuthCredentials credentials = new AuthCredentials();
        credentials.setEmail(TEST_EMAIL);
        credentials.setPassword(TEST_PASSWORD);
        credentials.setAddress(TEST_ADDRESS);
        credentials.setCity(TEST_CITY);
        credentials.setPhoneNumber(TEST_PHONE_NUMBER);


        Response response = userTarget.path("/login").request(MediaType.APPLICATION_JSON)
            .post(Entity.entity(credentials, MediaType.APPLICATION_JSON));

        assertEquals(202, response.getStatus());
        assertNotNull(response.getHeaderString(HttpHeaders.AUTHORIZATION));
        jsonWebToken = response.getHeaderString(HttpHeaders.AUTHORIZATION);
    }

    @Test
    @InSequence(6)
    public void shouldGetAllCustomers() {

    }

    @Test
    @InSequence(7)
    public void shouldGetAllFreelancers() {

    }

    @Test
    @InSequence(8)
    public void shouldGetAllStaff() {

    }

}
*/