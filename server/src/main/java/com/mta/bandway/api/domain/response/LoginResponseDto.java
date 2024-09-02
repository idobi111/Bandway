package com.mta.bandway.api.domain.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponseDto {
    private Integer userId;
    private String firstName;
    private String lastName; ;
}
