package sn.uchk.universite.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sn.uchk.universite.dto.AdministratifRegisterRequest;
import sn.uchk.universite.dto.EtudiantRegisterRequest;
import sn.uchk.universite.dto.FormateurRegisterRequest;
import sn.uchk.universite.entity.*;
import sn.uchk.universite.repository.*;
@Service
public class InscriptionService {

    private final EtudiantRepository etudiantRepository;
    private final FormateurRepository formateurRepository;
    private final AdministratifRepository administratifRepository;
    private final FormationRepository formationRepository;
    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;
    private final UploadService uploadService;
    public InscriptionService(
            EtudiantRepository etudiantRepository,
            FormateurRepository formateurRepository,
            AdministratifRepository administratifRepository,
            FormationRepository formationRepository,
            UtilisateurRepository utilisateurRepository,
            PasswordEncoder passwordEncoder,
            UploadService uploadService
    ) {

        this.etudiantRepository = etudiantRepository;
        this.formateurRepository = formateurRepository;
        this.administratifRepository = administratifRepository;
        this.formationRepository = formationRepository;
        this.utilisateurRepository = utilisateurRepository;
        this.passwordEncoder = passwordEncoder;
        this.uploadService = uploadService;
    }

    public Etudiant inscrireEtudiant(
            EtudiantRegisterRequest request) {

        if(utilisateurRepository.existsByEmail(
                request.getEmail())) {
            throw new RuntimeException(
                    "Email déjà utilisé");
        }

        Formation formation =
                formationRepository.findById(
                                request.getFormationId())
                        .orElseThrow();

        Etudiant etudiant = new Etudiant();
        etudiant.setRole(Role.ETUDIANT);
        etudiant.setNom(request.getNom());
        etudiant.setPrenom(request.getPrenom());
        etudiant.setEmail(request.getEmail());

        etudiant.setMotDePasse(
                passwordEncoder.encode(
                        request.getMotDePasse()));

        etudiant.setTelephone(
                request.getTelephone());

        etudiant.setIne(request.getIne());
        etudiant.setPromotion(
                request.getPromotion());

        etudiant.setAnneeDebut(
                request.getAnneeDebut());

        etudiant.setAnneeSortie(
                request.getAnneeSortie());

        etudiant.setFormation(formation);
        String photoName = null;

        if (request.getPhoto() != null && !request.getPhoto().isEmpty()) {
            photoName = uploadService.uploadPhoto(request.getPhoto());
        }
        etudiant.setPhoto(photoName);
        return etudiantRepository.save(etudiant);
    }

    public Formateur inscrireFormateur(
            FormateurRegisterRequest request) {

        if(utilisateurRepository.existsByEmail(
                request.getEmail())) {
            throw new RuntimeException(
                    "Email déjà utilisé");
        }

        Formateur formateur = new Formateur();

        formateur.setNom(request.getNom());
        formateur.setPrenom(request.getPrenom());
        formateur.setEmail(request.getEmail());

        formateur.setMotDePasse(
                passwordEncoder.encode(
                        request.getMotDePasse()));

        formateur.setTelephone(
                request.getTelephone());

        formateur.setSpecialite(
                request.getSpecialite());

        formateur.setGrade(
                request.getGrade());

        formateur.setDepartement(
                request.getDepartement());

        formateur.setTypeFormateur(
                request.getTypeFormateur());
        String photoName = null;

        if (request.getPhoto() != null && !request.getPhoto().isEmpty()) {
            photoName = uploadService.uploadPhoto(request.getPhoto());
        }

        formateur.setPhoto(photoName);
        return formateurRepository.save(
                formateur);
    }

    public Administratif inscrireAdministratif(
            AdministratifRegisterRequest request) {

        if(utilisateurRepository.existsByEmail(
                request.getEmail())) {
            throw new RuntimeException(
                    "Email déjà utilisé");
        }

        Administratif admin =
                new Administratif();
        admin.setRole(Role.ADMINISTRATIF);
        admin.setNom(request.getNom());
        admin.setPrenom(request.getPrenom());
        admin.setEmail(request.getEmail());

        admin.setMotDePasse(
                passwordEncoder.encode(
                        request.getMotDePasse()));

        admin.setTelephone(
                request.getTelephone());

        admin.setService(
                request.getService());

        admin.setFonction(
                request.getFonction());

        admin.setBureau(
                request.getBureau());

        String photoName = null;

        if (request.getPhoto() != null && !request.getPhoto().isEmpty()) {
            photoName = uploadService.uploadPhoto(request.getPhoto());
        }

        admin.setPhoto(photoName);
        return administratifRepository.save(
                admin);
    }
}
