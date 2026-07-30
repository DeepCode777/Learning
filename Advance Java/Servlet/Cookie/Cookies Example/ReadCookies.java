import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class cookieForm extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Cookie c = null;
        Cookie[] cookies = null;

        cookies = request.getCookies();


        response.setContentType("text/htm");

        PrintWriter out = response.getWriter();



        if( cookies != null){
            out.print("<h2> Found Cookies Name & value </h2>");
            for(int i=0; i<cookies.length; i++){
                c = cookies[i];
                out.print("Name : "+cookie.getName()+ " ");
                out.print("Value : "+cookie.getValue()+ " </br>");
            }
        }else{
            out.print("No cookies found");
    }
}