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
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class SecurityConfig implements WebMvcConfigurer {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;

    }
    @Bean


    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**", "/api/inscription/**").permitAll()
                        .requestMatchers("/uploads/**").permitAll()
                        .requestMatchers("/api/formations**").permitAll()
                        .requestMatchers("/api/admin/**").hasRole("ADMINISTRATIF")
                        .requestMatchers("/api/enseignant/**").hasAnyRole("ENSEIGNANT", "ENSEIGNANT_ASSOCIE")
                        .requestMatchers("/api/tuteur/**").hasRole("TUTEUR")
                        .requestMatchers("/api/etudiant/**").hasRole("ETUDIANT")
                        .requestMatchers("/api/etudiants/**").hasAnyRole("FORMATEUR", "ADMINISTRATIF", "ETUDIANT")
                        .requestMatchers("/api/formateurs/**").hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.GET, "/api/formateurs/mes-formations")
                        .authenticated()
                        // formation
                        .requestMatchers(HttpMethod.POST, "/api/formation/**").hasAnyRole("RESPONSABLE_FORMATION", "ADMINISTRATIF")
                        .requestMatchers(HttpMethod.PUT, "/api/formation/**").hasAnyRole("RESPONSABLE_FORMATION", "ADMINISTRATIF")
                        .requestMatchers(HttpMethod.DELETE, "/api/formation/**").hasRole("ADMINISTRATIF")
                        .requestMatchers(HttpMethod.GET, "/api/formation/**").authenticated()
                        //emplois-du-temps
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
                        .requestMatchers(HttpMethod.GET, "/api/documents/telecharger/**").authenticated()
                        // gestion d'stage
                        .requestMatchers(HttpMethod.POST, "/api/stages/**").hasAnyRole("ADMINISTRATIF", "ETUDIANT")

                        .requestMatchers(HttpMethod.PUT, "/api/stages/**")
                        .hasRole("ADMINISTRATIF")

                        .requestMatchers(HttpMethod.DELETE, "/api/stages/**")
                        .hasRole("ADMINISTRATIF")

                        .requestMatchers(HttpMethod.GET, "/api/stages/**")
                        .hasAnyRole("ADMINISTRATIF", "FORMATEUR", "ETUDIANT")

                        .requestMatchers(
                                HttpMethod.GET,
                                "/api/stages/mes-stages"
                        ).hasRole("ETUDIANT")
                        // gestion des reunion

                        .requestMatchers(HttpMethod.POST, "/api/reunions/**")
                        .hasRole("ADMINISTRATIF")

                        .requestMatchers(HttpMethod.GET, "/api/reunions/**")
                        .hasAnyRole("ADMINISTRATIF", "FORMATEUR", "ETUDIANT")

                        // Gestion des rapports

                        .requestMatchers(HttpMethod.POST, "/api/rapports/**")
                        .hasRole("ADMINISTRATIF")

                        .requestMatchers(HttpMethod.GET, "/api/rapports/**")
                        .hasAnyRole("ADMINISTRATIF", "FORMATEUR", "ETUDIANT")

                        // Gestion des budgets

                        .requestMatchers(HttpMethod.POST, "/api/budgets/**")
                        .hasRole("ADMINISTRATIF")

                        .requestMatchers(HttpMethod.PUT, "/api/budgets/**")
                        .hasRole("ADMINISTRATIF")

                        .requestMatchers(HttpMethod.DELETE, "/api/budgets/**")
                        .hasRole("ADMINISTRATIF")

                        .requestMatchers(HttpMethod.GET, "/api/budgets/**")
                        .hasAnyRole("ADMINISTRATIF", "FORMATEUR")

                        .requestMatchers("/api/notifications/**")
                        .authenticated()
                        .requestMatchers("/api/dashboard-etudiant/**")
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

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(
                List.of("http://localhost:4200")
        );

        configuration.setAllowedMethods(
                List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")
        );

        configuration.setAllowedHeaders(
                List.of("*")
        );

        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");
    }
}