import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class urlRedirect extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {

        res.setContentType("text/html");
        PrintWriter pw = res.getWriter();

        pw.print("<h2><i><u>URL Redirect</u></i></h2>");
        pw.print("<br>");

        String nm = req.getParameter("name");
        Int first = Integer.parseInt(req.getParameter("fnum"));
        Int sec = Integer.parseInt(req.getParameter("snum"));
        
        int sum = first+sec;

        pw.print("Name : " +nm);
        pw.print("Sum of number : " +sum);

        // URL Redirect - sum redirect to sqr file
        req.sendRedirect("sqr?key=" +sum);

    }
}