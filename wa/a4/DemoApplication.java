package com.example.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.apache.commons.math3.fraction.*;
              
@SpringBootApplication
@RestController
public class DemoApplication {              
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
                  
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "Joe") String name, @RequestParam(value = "title", defaultValue = "King of Europe") String title) {
		return String.format("Hello %s, %s!", name, title);
    }   
	
	// Returns the sum of the reciprocals of the two input values
    @GetMapping("/fraction")
    public String fraction(@RequestParam(value = "val1", defaultValue = "1") String val1, @RequestParam(value = "val2", defaultValue = "1") String val2){
		Fraction lhs = new Fraction(1, Integer.parseInt(val1));
		Fraction rhs = new Fraction(1, Integer.parseInt(val2));
		Fraction sum = lhs.add(rhs);
		String str = new FractionFormat().format(sum);
		
		return str;
    }   
}
            