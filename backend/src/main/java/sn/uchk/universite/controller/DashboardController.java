package sn.uchk.universite.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.dto.DashboardStatsDTO;
import sn.uchk.universite.service.DashboardService;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping
    public DashboardStatsDTO getStats() {

        return dashboardService.statistiques();
    }

    @GetMapping("/export/pdf")
    public ResponseEntity<byte[]> exportPdf() {

        return dashboardService.exportPdf();
    }
}