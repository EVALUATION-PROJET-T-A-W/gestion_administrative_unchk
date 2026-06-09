package sn.uchk.universite.dto;

public class AuthResponse {
    private String token;
    private String role;
    private  String email;

    public AuthResponse(
            String token,
            String role,
            String email
    ){
        this.token = token;
        this.role = role;
        this. email = email;
    }
}
