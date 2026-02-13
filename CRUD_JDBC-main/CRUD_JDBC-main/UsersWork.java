import java.sql.*;
import java.util.Scanner;
import java.sql.DriverManager;
import java.lang.Throwable;
public class UsersWork {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String url="jdbc:mysql://localhost:3306/JDBC";
        String user="root";
        String password="Root@123";
        

        try
        {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conn=DriverManager.getConnection(url,user,password);
            System.out.println("Database is connected");

//            System.out.println("Put name which you want to add-");
//            String name=sc.nextLine();
//
//            System.out.println("Mail id-");
//            String mail=sc.nextLine();
//
//            System.out.println("Enter your age-");
//            int age=sc.nextInt();
//
//            String iq="INSERT INTO Users(Name,Mail,Age)VALUES(?,?,?)";
//            PreparedStatement ps=conn.prepareStatement(iq);
//            ps.setString(1,name);
//            ps.setString(2,mail);
//            ps.setInt(3,age);
//
//            int ros=ps.executeUpdate();
//            System.out.println(ros+":inserted---");
//
//
//            String selectQuery = "SELECT * FROM Users";
//            Statement stmt = conn.createStatement();
//            ResultSet rs = stmt.executeQuery(selectQuery);
//
//            while (rs.next()) {
//                System.out.println("ID: " + rs.getString("name") +
//                        ", Name: " + rs.getString("mail") +
//                        ", Age: " + rs.getInt("age"));
//            }
            String nm = "s@gmail.com";
            String n = "Shanti";

            String u = "UPDATE Users SET mail = ? WHERE Name = ?";
            PreparedStatement ps1 = conn.prepareStatement(u);


            ps1.setString(1, nm);
            ps1.setString(2, n);

            int rows = ps1.executeUpdate();

            if (rows > 0) {
                System.out.println("Update done! " + rows + " row(s) affected.");
            } else {
                System.out.println("No record found with Name=" + n);
            }


        }catch(Exception e)
        {
            e.printStackTrace();
        }
    }
}
