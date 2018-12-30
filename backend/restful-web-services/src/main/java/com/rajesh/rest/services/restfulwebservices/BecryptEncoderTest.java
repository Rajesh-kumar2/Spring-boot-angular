package com.rajesh.rest.services.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BecryptEncoderTest {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder= new BCryptPasswordEncoder();
		for(int i =1; i<=10; i++) {
		String encodedString = encoder.encode("password@123");
		System.out.println(encodedString);
		}
	}

}
