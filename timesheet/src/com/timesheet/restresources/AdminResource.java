package com.timesheet.restresources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.timesheet.jaxb.Employee;

@Path("/admin")
public class AdminResource {

	@GET
	@Path("users")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Employee> getAllEmployees() {
		return null;
	}
	
	@GET
	@Path("users/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Employee getEmployee(@PathParam("id") Integer id) {
		return new Employee();
	}
	
	@POST
	@Path("users/add")
	@Consumes(MediaType.APPLICATION_JSON)
	public void addUser(Employee employee) {
		System.out.println("adding user "+ employee.toString());
	}
	
}
