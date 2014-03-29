package com.timesheet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/admin")
public class AdministratorController {

	@RequestMapping(method=RequestMethod.POST)
	public void addUser() {
		
	}
}
