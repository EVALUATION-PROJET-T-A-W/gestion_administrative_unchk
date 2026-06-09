package sn.uchk.universite.dto;

import java.time.LocalDate;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@Data
public class EtudiantRegisterRequest {
    private String nom;
    private String prenom;
    private String email;
    private String motDePasse;
    private String telephone;
    private MultipartFile photo;
    private String ine;
    private String promotion;
    private LocalDate anneeDebut;
    private LocalDate anneeSortie;
    private Long formationId;
}
