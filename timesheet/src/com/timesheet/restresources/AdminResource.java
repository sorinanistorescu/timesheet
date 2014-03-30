package com.timesheet.restresources;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("/admin")
public class AdminResource {

	@POST
	@Path("addUser")
	public void addUser() {
		System.out.println("adding user");
	}
}
