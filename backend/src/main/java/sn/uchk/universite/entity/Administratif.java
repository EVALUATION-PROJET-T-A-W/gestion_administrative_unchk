package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "administratif")
@PrimaryKeyJoinColumn(name = "id")
public class Administratif extends Utilisateur {

    private String service;

    private String fonction;

    private String bureau;
    public Administratif() {
        setRole(Role.ADMINISTRATIF);
    }
}