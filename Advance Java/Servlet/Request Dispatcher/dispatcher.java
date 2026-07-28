import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class dispatcher extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {

        res.setContentType("text/html");
        PrintWriter pw = res.getWriter();

        pw.print("<h2><i><u>Request Dispatcher</u></i></h2>");
        pw.print("<br>");

        String nm = req.getParameter("name");
        Int age = Integer.parseInt(req.getParameter("age"));
        
        req.setAtteribute("key", nm);    // key, para
        // second servlet Name
        RequestDispatcher rd = req.getRequestDispater("add");
        // forward object
        rd.forward(req, res);

    }
}