import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class sqr extends HttpServlet {
              //service();
    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {

        res.setContentType("text/html");
        PrintWriter pw = res.getWriter();

        pw.print("<h2><i><u>URL Redirect</u></i></h2>");
        pw.print("<br>");

        int  num = Integer.parseInt(req.getParameter("key"));    // same key
        int sqrt = num*num;
        pw.print("second servlet  <br> Square = " +sqrt);
    }
}