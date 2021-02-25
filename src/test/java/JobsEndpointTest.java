import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.container.test.api.RunAsClient;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.arquillian.test.api.ArquillianResource;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.jboss.shrinkwrap.resolver.api.maven.Maven;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;
import java.io.File;
import java.net.URI;

@RunWith(Arquillian.class)
@RunAsClient
public class JobsEndpointTest {


    private WebTarget jobTarget;
    private static NewCookie tokenCookie;
    @ArquillianResource
    private URI baseURL;

    @Deployment(testable = false)
    public static WebArchive createDeployment() {
        File[] files = Maven.resolver().loadPomFromFile("pom.xml")
                .importCompileAndRuntimeDependencies().resolve().withTransitivity().asFile();

        return ShrinkWrap.create(WebArchive.class)
                .addPackages(true, "com.titsuite")
                .addAsResource("config.properties")
                .addAsLibraries(files);
    }

    @Before
    public void initWebTarget() {
        Client client = ClientBuilder.newClient();
        jobTarget = client.target(baseURL).path("api/myjobs");
    }

    @Test
    public void mustReturnFreelancerJobs(){

        Response response = jobTarget.path("/all").request(MediaType.APPLICATION_JSON)
                .cookie(tokenCookie).get();
    }


}
