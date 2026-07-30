import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ReadCookies extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // initialisation var
        Cookie c = null;
        // initialisation array for cookies
        Cookie[] cookies = null;

        // get the cookie
        cookies = request.getCookies();


        response.setContentType("text/htm");

        PrintWriter out = response.getWriter();


        // check cookies is exist or not
        if( cookies != null){
            out.print("<h2> Found Cookies Name & value </h2>");
            for(int i=0; i<cookies.length; i++){
                c = cookies[i];    // cookies retrieve as array - can have multiple cookies at same time
                out.print("Name : "+cookie.getName()+ " ");
                out.print("Value : "+cookie.getValue()+ " </br>");
            }
        }else{
            out.print("No cookies found");
    }
}