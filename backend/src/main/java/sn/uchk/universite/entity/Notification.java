package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "notification")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;

    private LocalDate dateNotification;

    private String etat;

    @ManyToOne
    @JoinColumn(name="utilisateur_id")
    private Utilisateur utilisateur;
}
