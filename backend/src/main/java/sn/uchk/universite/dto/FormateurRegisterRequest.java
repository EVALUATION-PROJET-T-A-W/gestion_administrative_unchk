package sn.uchk.universite.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;
import sn.uchk.universite.entity.TypeFormateur;
@Getter
@Setter
public class FormateurRegisterRequest {
    private String nom;
    private String prenom;
    private String email;
    private String motDePasse;
    private String telephone;

    private String specialite;
    private String grade;
    private String departement;
    private MultipartFile photo;
    private TypeFormateur typeFormateur;
}
