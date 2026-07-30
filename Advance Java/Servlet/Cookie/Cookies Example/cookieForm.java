import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class cookieForm extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // create cookie - when requeste come
        Cookie firstName = new Cookie("first_name", request.getParameter("first_name"));
        Cookie lastName = new Cookie("last_name", request.getParameter("last_name"));

        // set cookies valid duration(age - 2 minit)
        firstName.setMexAge(120);
        lastName.setMexAge(120);

        // add cookies with response 
        response.addCookie(firstName);
        response.addCookie(lastName);


    }
}