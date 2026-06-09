package sn.uchk.universite.service;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sn.uchk.universite.dto.LoginRequest;
import sn.uchk.universite.dto.LoginResponse;
import sn.uchk.universite.entity.Utilisateur;
import sn.uchk.universite.repository.UtilisateurRepository;
import sn.uchk.universite.security.JwtService;

@Service
public class AuthService {

    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UtilisateurRepository utilisateurRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.utilisateurRepository = utilisateurRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public LoginResponse login(LoginRequest request) {

        Utilisateur utilisateur = utilisateurRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Email ou mot de passe incorrect"));

        if (!passwordEncoder.matches(
                request.getMotDePasse(),
                utilisateur.getMotDePasse())) {

            throw new RuntimeException(
                    "Email ou mot de passe incorrect");
        }

        String token =
                jwtService.generateToken(utilisateur);

        return new LoginResponse(
                token,
                "Bearer",
                utilisateur.getId(),
                utilisateur.getNom(),
                utilisateur.getPhoto(),
                utilisateur.getPrenom(),
                utilisateur.getEmail(),
                utilisateur.getRole().name()
        );

    }
}
