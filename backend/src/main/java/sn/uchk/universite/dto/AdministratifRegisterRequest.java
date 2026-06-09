package sn.uchk.universite.dto;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@Data
public class AdministratifRegisterRequest {
    private String nom;
    private String prenom;
    private String email;
    private String motDePasse;
    private String telephone;

    private String service;
    private String fonction;
    private String bureau;
    private MultipartFile photo;

}
