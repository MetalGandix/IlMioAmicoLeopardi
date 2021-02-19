package leopardiproject.csd.security;

import javax.annotation.Resource;
import leopardiproject.csd.jwt.JwtAuthenticationEntryPoint;
import leopardiproject.csd.jwt.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

	@Resource(name = "userService")
	@Autowired
	private UserDetailsService jwtUserDetailsService;

	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	@Autowired
    public void globalUserDetails(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(jwtUserDetailsService)
                .passwordEncoder(passwordEncoder());
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		// configure AuthenticationManager so that it knows from where to load
		// user for matching credentials
		// Use BCryptPasswordEncoder
		auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		// We don't need CSRF for this example
		httpSecurity.cors();
		httpSecurity.csrf().disable()
				// dont authenticate this particular request
				.authorizeRequests().antMatchers("/authenticate","/mobilenumbers/{mobilenumber}/otp", "/register","/user","/visita","/existUser/{username}","/vediVisite","/cancellaVisita/{id}","/vediUtenti", "/visita", "/vediUtenti/{username}","/vediVisita/{id}", "/visiteCancellate", "/inserisciModulo", "/vediEventi","/getPoesia/{titolo}", "/getPoesie", "/poesia/{capitolo}", "/inserisciMessaggioContatti", "/image/get/{imageName}","/poesiaLike/{titolo}", "/immagineCarousel", "/confirm-account","/getPoesiaAudio/{id}", "/audioId/{id}").permitAll()
				.antMatchers("/vediVisite", "/cancellaVisita/{id}", "/vediVisita/{id}", "/vediUtenti", "/visiteCancellate", "/inserisciEventi", "/inserisciPoesia", "/cancellaModulo/{id}", "/cancellaEvento/{id}","/nominaAdmin/{id}", "/image/upload", "/visiteAvvenute","/cancellaVisitaAvvenuta/{id}", "/moduliConfermati", "/vediModuliConfermati", "/eliminaModuliConfermati").access("hasRole('ROLE_ADMIN')")
				.antMatchers("/visita","/prendiVisitaUtente/{prenotazioneVisitatore}").access("hasRole('ROLE_VISITATORE')")
				/*.permitAll().antMatchers(HttpMethod.OPTIONS, "/**")
				.permitAll().*/
				// all other requests need to be authenticated
				.anyRequest().authenticated().and().
				// make sure we use stateless session; session won't be used to
				// store user's state.
				exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	httpSecurity
				.logout().logoutSuccessUrl("/login");

		// Add a filter to validate the tokens with every request
		httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
	}
}