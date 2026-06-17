package sn.uchk.universite.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sn.uchk.universite.dto.DashboardEtudiantDto;
import sn.uchk.universite.service.DashboardEtudiantService;

@RestController
@RequestMapping("/api/dashboard-etudiant")
public class DashboardEtudiantController {

    private final DashboardEtudiantService dashboardService;

    public DashboardEtudiantController(
            DashboardEtudiantService dashboardService) {

        this.dashboardService = dashboardService;
    }

    @GetMapping
    public DashboardEtudiantDto dashboard(
            Authentication authentication) {

        return dashboardService.dashboard(authentication);
    }
}