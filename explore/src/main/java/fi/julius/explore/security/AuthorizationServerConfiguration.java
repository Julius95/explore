package fi.julius.explore.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;
import static org.springframework.security.oauth2.core.AuthorizationGrantType.REFRESH_TOKEN;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    @Qualifier("authenticationManagerBean")
    private AuthenticationManager authManager;

    @Autowired
    private TokenStore tokenStore;

    /**
     * Configure Angular client only.
     * @param clients
     * @throws Exception
     */
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory().withClient("client")
                .authorizedGrantTypes("password",REFRESH_TOKEN.getValue())
                .authorities("ROLE_TRUSTED_CLIENT")
                .scopes("read", "write")
                .autoApprove(true)
                .secret(encoder.encode("client"));
    }

    @Override
    public void configure (AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints
            .authenticationManager (authManager)
            .tokenStore (tokenStore);
    }

    @Bean
    public TokenStore tokenStore() {
        return new InMemoryTokenStore();
    }
}
