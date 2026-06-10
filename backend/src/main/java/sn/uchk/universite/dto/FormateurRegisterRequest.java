package sn.uchk.universite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;
import sn.uchk.universite.entity.TypeFormateur;
@Getter
@Setter
@Data
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
