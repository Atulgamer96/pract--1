import java.io.*;
import java.util.*;

public class Signup {

    private static final String FILE_NAME = "users.txt";

    void signup() {
        Scanner sc = new Scanner(System.in);

        System.out.println("Signup--");

        System.out.print("Give me USERNAME:-  ");
        String name = sc.next();

        System.out.print("Enter mail id:-  ");
        String mail = sc.next();

        System.out.print("Password:-  ");
        String pass = sc.next();

        System.out.println("Welcome " + name);
        System.out.println("Mail: " + mail);
        System.out.println("Password: " + pass);

        System.out.println("NOTE: REMEMBER ID AND PASSWORD FOR LOGIN THANKS--");

        saveUser(name, mail, pass); // file me save karo
    }

    Boolean verify(String name) {
        boolean found = false;

        try (BufferedReader br = new BufferedReader(new FileReader(FILE_NAME))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 3 && parts[0].equals(name)) {
                    System.out.println("Welcome ! " + parts[0]);
                    found = true;

                    break;
                }


            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (!found) {
            System.out.println("Sorry user not found--");
            return false;
        }
        return true;
    }

    // File me ek user ko save karo (append mode)
    private void saveUser(String name, String mail, String pass) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(FILE_NAME, true))) {
            bw.write(name + "," + mail + "," + pass);
            bw.newLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
