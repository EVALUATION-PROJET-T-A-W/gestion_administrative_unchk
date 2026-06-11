package sn.uchk.universite.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;

    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**", "/api/inscription/**").permitAll()
                        .requestMatchers("/api/formations**").permitAll()
                        .requestMatchers("/api/admin/**").hasRole("ADMINISTRATIF")
                        .requestMatchers("/api/enseignant/**").hasAnyRole("ENSEIGNANT", "ENSEIGNANT_ASSOCIE")
                        .requestMatchers("/api/tuteur/**").hasRole("TUTEUR")
                        .requestMatchers("/api/etudiant/**").hasRole("ETUDIANT")
                        .requestMatchers("/api/etudiants/**").hasAnyRole("FORMATEUR", "ADMINISTRATIF", "ETUDIANT")
                        .requestMatchers("/api/formation/**").hasAnyRole("RESPONSABLE_FORMATION", "ADMINISTRATIF")
                        .requestMatchers("/api/formateurs/**").hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.POST, "/api/emplois-du-temps/**").hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.PUT, "/api/emplois-du-temps/**").hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.DELETE, "/api/emplois-du-temps/**").hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.GET, "/api/emplois-du-temps/**").authenticated()
                        //Gestion des documents
                        .requestMatchers(HttpMethod.POST, "/api/documents/**")
                        .hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.PUT, "/api/documents/**")
                        .hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.DELETE, "/api/documents/**")
                        .hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.GET, "/api/documents/**")
                        .authenticated()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}