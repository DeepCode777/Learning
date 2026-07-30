import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

@WebSwervlet("/cookieData")
public class CookiesEx extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {

        String n1 = req.getParameter("name");
        //Cookie cookie = new Cookie("key", "123");
        PrintWriter out = res.getWriter();
        boolean uvisit = false;

        Cookie[] cookies = req.getCookies();

        // cookies is null or not
        if(cookies != null){
            // user have cookies (revisit)
            for(int i=0; i<cookies.length; i++){
                Cookie c = cookies[i];
                String name = c.getName();
                String val = c.getValue();

                // identify cookie
                if(name.equals("k") && val.equal("123")){
                    out.print("Welcome Back " +n1);
                    uvisit = true;  // revisited user
                    break;
                }
            }
        }
        // user come first time 
        if(uvisit == false){

            // create cookies for user - because they have no cookies 
            Cookie c1 = new Cookie("key", "123");
            // add cookies with response
            res.addCookies(c1);
            out.print("Welcome " +n1);  // message for user
        }
    }
}