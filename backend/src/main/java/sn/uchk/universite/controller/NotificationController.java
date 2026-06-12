package sn.uchk.universite.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Notification;
import sn.uchk.universite.service.NotificationService;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final NotificationService notificationService;

    public NotificationController(
            NotificationService notificationService) {

        this.notificationService = notificationService;
    }

    @GetMapping
    public List<Notification> mesNotifications(
            Authentication authentication) {

        return notificationService
                .mesNotifications(authentication);
    }

    @PutMapping("/{id}/lire")
    public Notification lire(
            @PathVariable Long id) {

        return notificationService
                .marquerCommeLue(id);
    }
}