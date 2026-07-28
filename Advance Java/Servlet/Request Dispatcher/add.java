import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class add extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {

        res.setContentType("text/html");
        PrintWriter pw = res.getWriter();

        pw.print("<h2><i><u>Request Dispatcher</u></i></h2>");
        pw.print("<br>");

        int  person = (int)req.getAttribute("key");    // same key
        pw.print("second servlet : " +person);
    }
}