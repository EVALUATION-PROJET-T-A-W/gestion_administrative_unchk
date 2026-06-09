CREATE TABLE `utilisateur` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `nom` VARCHAR(100),
  `prenom` VARCHAR(100),
  `email` VARCHAR(150) UNIQUE,
  `mot_de_passe` VARCHAR(255),
  `telephone` VARCHAR(30),
  `photo` VARCHAR(255),
  `role` ENUM ('ETUDIANT', 'FORMATEUR', 'ADMINISTRATIF')
);

CREATE TABLE `administratif` (
  `id` BIGINT PRIMARY KEY,
  `service` VARCHAR(100),
  `fonction` VARCHAR(100),
  `bureau` VARCHAR(100)
);

CREATE TABLE `formateur` (
  `id` BIGINT PRIMARY KEY,
  `specialite` VARCHAR(100),
  `grade` VARCHAR(100),
  `departement` VARCHAR(100),
  `type_formateur` ENUM ('ENSEIGNANT', 'ENSEIGNANT_ASSOCIE', 'TUTEUR', 'RESPONSABLE_FORMATION')
);

CREATE TABLE `formation` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `nom_formation` VARCHAR(150),
  `type_formation` VARCHAR(100),
  `niveau` VARCHAR(50),
  `date_debut` DATE,
  `date_fin` DATE,
  `montant` DECIMAL(12,2),
  `type_financement` VARCHAR(100),
  `nombre_homme` INT,
  `nombre_femme` INT,
  `description` TEXT
);

CREATE TABLE `etudiant` (
  `id` BIGINT PRIMARY KEY,
  `ine` VARCHAR(50) UNIQUE,
  `promotion` VARCHAR(100),
  `annee_debut` DATE,
  `annee_sortie` DATE,
  `formation_id` BIGINT
);

CREATE TABLE `notification` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `message` TEXT,
  `date_notification` DATE,
  `etat` VARCHAR(50),
  `utilisateur_id` BIGINT
);

CREATE TABLE `stage` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `entreprise` VARCHAR(150),
  `date_debut` DATE,
  `date_fin` DATE,
  `bilan` TEXT,
  `statut` VARCHAR(50),
  `etudiant_id` BIGINT
);

CREATE TABLE `document` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `titre` VARCHAR(200),
  `type_document` VARCHAR(100),
  `fichier` VARCHAR(255),
  `date_publication` DATE,
  `description` TEXT,
  `administratif_id` BIGINT
);

CREATE TABLE `budget` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `annee` YEAR,
  `montant_prevu` DECIMAL(15,2),
  `montant_realise` DECIMAL(15,2),
  `note_orientation` TEXT,
  `administratif_id` BIGINT
);

CREATE TABLE `courrier` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `type_courrier` VARCHAR(100),
  `objet` TEXT,
  `date_envoi` DATE,
  `expediteur` VARCHAR(150),
  `destinataire` VARCHAR(150),
  `administratif_id` BIGINT
);

CREATE TABLE `formation_formateur` (
  `formation_id` BIGINT,
  `formateur_id` BIGINT,
  PRIMARY KEY (`formation_id`, `formateur_id`)
);

CREATE TABLE `cours` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `titre` VARCHAR(200),
  `description` TEXT,
  `date_cours` DATE,
  `support_cours` VARCHAR(255),
  `formation_id` BIGINT
);

CREATE TABLE `evaluation` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `type_evaluation` ENUM ('DEVOIR', 'EXAMEN', 'QUIZ'),
  `date_evaluation` DATE,
  `note` DECIMAL(5,2),
  `coefficient` INT,
  `cours_id` BIGINT
);

CREATE TABLE `examen` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `matiere` VARCHAR(150),
  `date_examen` DATE,
  `salle` VARCHAR(100),
  `formation_id` BIGINT
);

CREATE TABLE `emploi_du_temps` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `jour` VARCHAR(30),
  `heure_debut` TIME,
  `heure_fin` TIME,
  `salle` VARCHAR(100),
  `module` VARCHAR(100),
  `formation_id` BIGINT
);

CREATE TABLE `reunion` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `titre` VARCHAR(200),
  `type_reunion` VARCHAR(100),
  `date_reunion` DATE,
  `compte_rendu` TEXT,
  `formation_id` BIGINT
);

CREATE TABLE `rapport` (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `titre` VARCHAR(200),
  `type_rapport` VARCHAR(100),
  `date_generation` DATE,
  `format` VARCHAR(50),
  `reunion_id` BIGINT
);

ALTER TABLE `administratif` ADD FOREIGN KEY (`id`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE;

ALTER TABLE `formateur` ADD FOREIGN KEY (`id`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE;

ALTER TABLE `etudiant` ADD FOREIGN KEY (`id`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE;

ALTER TABLE `etudiant` ADD FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`);

ALTER TABLE `notification` ADD FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE;

ALTER TABLE `stage` ADD FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id`) ON DELETE CASCADE;

ALTER TABLE `document` ADD FOREIGN KEY (`administratif_id`) REFERENCES `administratif` (`id`);

ALTER TABLE `budget` ADD FOREIGN KEY (`administratif_id`) REFERENCES `administratif` (`id`);

ALTER TABLE `courrier` ADD FOREIGN KEY (`administratif_id`) REFERENCES `administratif` (`id`);

ALTER TABLE `formation_formateur` ADD FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`) ON DELETE CASCADE;

ALTER TABLE `formation_formateur` ADD FOREIGN KEY (`formateur_id`) REFERENCES `formateur` (`id`) ON DELETE CASCADE;

ALTER TABLE `cours` ADD FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`);

ALTER TABLE `evaluation` ADD FOREIGN KEY (`cours_id`) REFERENCES `cours` (`id`) ON DELETE CASCADE;

ALTER TABLE `examen` ADD FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`);

ALTER TABLE `emploi_du_temps` ADD FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`);

ALTER TABLE `reunion` ADD FOREIGN KEY (`formation_id`) REFERENCES `formation` (`id`);

ALTER TABLE `rapport` ADD FOREIGN KEY (`reunion_id`) REFERENCES `reunion` (`id`) ON DELETE CASCADE;
