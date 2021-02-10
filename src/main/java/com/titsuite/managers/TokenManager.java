package com.titsuite.managers;

import org.jose4j.jwk.PublicJsonWebKey;
import org.jose4j.jwk.RsaJsonWebKey;
import org.jose4j.jws.AlgorithmIdentifiers;
import org.jose4j.jws.JsonWebSignature;
import org.jose4j.jwt.JwtClaims;
import org.jose4j.jwt.consumer.InvalidJwtException;
import org.jose4j.jwt.consumer.JwtConsumer;
import org.jose4j.jwt.consumer.JwtConsumerBuilder;
import org.jose4j.lang.JoseException;

import java.io.IOException;
import java.util.Map;
import java.util.Properties;

public class TokenManager {

    private static RsaJsonWebKey rsaJsonWebKey = null;
    private static final String issuer = "titsuite.com";
    private static final int timeToLive = 30;

    static {
        try {
            Properties properties = new Properties();
            properties.load(TokenManager.class.getClassLoader().getResourceAsStream("config.properties"));
            String jwkJson = properties.getProperty("privateKey");
            PublicJsonWebKey publicJsonWebKey = PublicJsonWebKey.Factory.newPublicJwk(jwkJson);
            rsaJsonWebKey = (RsaJsonWebKey) publicJsonWebKey;
        } catch (JoseException | IOException e) {
            e.printStackTrace();
        }
    }

    public static String generateJWT(String id, String role) throws JoseException {
        rsaJsonWebKey.setKeyId("key1");

        JwtClaims claims = new JwtClaims();
        claims.setIssuer(issuer);
        claims.setExpirationTimeMinutesInTheFuture(timeToLive);
        claims.setGeneratedJwtId();
        claims.setIssuedAtToNow();
        claims.setNotBeforeMinutesInThePast(2);
        claims.setClaim("id", id);
        claims.setClaim("role", role);

        JsonWebSignature jws = new JsonWebSignature();
        jws.setPayload(claims.toJson());
        jws.setKey(rsaJsonWebKey.getPrivateKey());
        jws.setKeyIdHeaderValue(rsaJsonWebKey.getKeyId());
        jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);

        return "Bearer " + jws.getCompactSerialization();
    }

    public static Map<String, Object> validateJWT(String token) throws InvalidJwtException {
        token = token.split("Bearer ")[1];

        JwtConsumer jwtConsumer = new JwtConsumerBuilder()
            .setRequireExpirationTime()
            .setMaxFutureValidityInMinutes(300)
            .setAllowedClockSkewInSeconds(30)
            .setExpectedIssuer(issuer)
            .setVerificationKey(rsaJsonWebKey.getKey())
            .build();

        JwtClaims jwtClaims = jwtConsumer.processToClaims(token);
        System.out.println("JWT validation succeeded : " + jwtClaims);

        return jwtClaims.getClaimsMap();
    }

}
