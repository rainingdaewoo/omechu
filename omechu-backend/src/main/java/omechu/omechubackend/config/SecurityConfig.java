package omechu.omechubackend.config;

import omechu.omechubackend.config.Oauth2.OAuth2AuthenticationSuccessHandler;
import omechu.omechubackend.config.Oauth2.PrincipalOauth2UserService;
import omechu.omechubackend.config.jwt.JwtAuthenticationEntryPoint;
import omechu.omechubackend.config.jwt.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration     // 빈 등록 (IoC 관리)
@EnableWebSecurity // 시큐리티 활성화가 되어있는데 이와 관련된 설정을 이 파일에서 하겠다는 뜻 -> 기본 스프링 필터체인에 등록
@EnableGlobalMethodSecurity(prePostEnabled = true) // 특정 주소로 접근 시 권한 및 인증 '미리' 체크
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private CorsConfig corsConfig;

    @Autowired
    private OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;

    @Bean
    public BCryptPasswordEncoder encodePwd() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    private PrincipalOauth2UserService principalOauth2UserService;

    @Autowired
    private JwtRequestFilter JwtRequestFilter;

    /*@Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.apply(new MyCustomDsl())
                .and()
                    .formLogin().disable()                  // 폼로그인 해제
                    .httpBasic().disable()                  // http basic 해제
                    .authorizeRequests()
                    .antMatchers("/", "/auth/**", "/login").permitAll()                //이 링크들은 허용
                    .antMatchers("/api/user/**").access("hasRole('ROLE_USER') or hasRole('ROLE_YOUTUBER') or hasRole('ROLE_ADMIN')")
                    .antMatchers("/api/youtuber/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_YOUTUBER')")
                    .antMatchers("/api/admin/**").access("hasRole('ROLE_ADMIN')")
                    .anyRequest().authenticated()//  인증이 있어야 함(로그인)
                .and()
                    .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .and()
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // 세션 사용 X
                .and()
                    .oauth2Login().defaultSuccessUrl("/login-success")
                    .successHandler(oAuth2AuthenticationSuccessHandler)
                    .userInfoEndpoint()
                    .userService(principalOauth2UserService);

        http.addFilterBefore(JwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();

    }*/

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.apply(new MyCustomDsl())
                .and()
                .formLogin().disable()                  // 폼로그인 해제
                .httpBasic().disable()                  // http basic 해제
                .authorizeRequests(authroize -> authroize.antMatchers("/api/user/**")
                        .access("hasRole('ROLE_USER') or hasRole('ROLE_YOUTUBER') or hasRole('ROLE_ADMIN')")
                        .antMatchers("/api/youtuber/**")
                        .access("hasRole('ROLE_ADMIN') or hasRole('ROLE_YOUTUBER')")
                        .antMatchers("/api/admin/**").access("hasRole('ROLE_ADMIN')")
                        .anyRequest().authenticated())
                .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // 세션 사용 X
                .and()
                .oauth2Login().defaultSuccessUrl("/login-success")
                .successHandler(oAuth2AuthenticationSuccessHandler)
                .userInfoEndpoint()
                .userService(principalOauth2UserService);

        http.addFilterBefore(JwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();

    }

    public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
        @Override
        public void configure(HttpSecurity http) throws Exception {
            AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
            http
                    .addFilter(corsConfig.corsFilter());
        }
    }

    /*@Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.apply(new MyCustomDsl()) .and().
                authorizeRequests()
                .antMatchers("/user/**").authenticated()
                .antMatchers("/manager/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
                .antMatchers("/admin/**").access("hasRole('ROLE_ADMIN')")
                .anyRequest().permitAll()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .oauth2Login().defaultSuccessUrl("/login-success")
                .successHandler(oAuth2AuthenticationSuccessHandler)
                .userInfoEndpoint()
                .userService(principalOauth2UserService);


        return http.build();
    }*/
}
